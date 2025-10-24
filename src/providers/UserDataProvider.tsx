import React, { createContext, useContext, useEffect, useState } from "react";
import auth, { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { IUser } from "../interface/users";
import { usersRef } from "../config/firebase";
import { goBack, reset } from "../navigation/NavigationService";
import firestore from "@react-native-firebase/firestore";
import { ROUTES } from "../navigation/Routes";

export interface IUserDataContext {
  registerUser: (data: IUser) => Promise<void>;
  currentUID: string | null;
  setCurrentUID: (uid: string | null) => void;
  currentUserData: IUser | null;
  setCurrentUserData: (data: IUser | null) => void;
  onSignOut: () => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

export const UserDataContext = createContext<IUserDataContext | undefined>(
  undefined
);

export default ({ children }: Props) => {
  const [currentUID, setCurrentUID] = useState<string | null>(null);
  const [currentUserData, setCurrentUserData] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);

  const handleAuthStateChanged = (user: any) => {
    console.log("user: ", user);

    if (user) {
      setCurrentUID(user.uid!);
      setCurrentUserData({
        ...user,
        id: user.uid,
      });

      reset({
        index: 0,
        routes: [
          {
            name: ROUTES.BottomStack,
            params: {
              screen: ROUTES.Home,
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;
  }, []);

  const registerUser = async (data: Partial<IUser>) => {
    const { email, password, name } = data;

    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email!,
        password!
      );
      if (user) {
        await usersRef.doc(user.uid!).set({
          name,
          email,
          password,
          date_created: firestore.FieldValue.serverTimestamp(),
        });
      }
      goBack();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const onSignOut = async () => {
    try {
      await auth().signOut();
      setCurrentUID(null);
      setCurrentUserData(null);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <UserDataContext.Provider
      value={{
        registerUser,
        currentUID,
        setCurrentUID,
        currentUserData,
        setCurrentUserData,
        onSignOut,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }

  return context;
};

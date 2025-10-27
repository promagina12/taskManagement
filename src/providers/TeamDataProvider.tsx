import React, { createContext, useContext } from "react";
import { ITask } from "../interface/task";
import { useUserData } from "./UserDataProvider";
import { teamsRef } from "../config/firebase";
import firestore from "@react-native-firebase/firestore";

interface ITeamDataProvider {
  createTeam: (data: ITask) => Promise<any>;
}

interface Props {
  children: React.ReactNode;
}

export const TeamDataContext = createContext<ITeamDataProvider | undefined>(
  undefined
);

const TeamDataProvider: React.FC<Props> = ({ children }) => {
  const { currentUID } = useUserData();

  const createTeam = async (data: ITask) => {
    try {
      const newTeamRef = await teamsRef.add({
        ...data,
        user_id: currentUID,
        date_created: firestore.FieldValue.serverTimestamp(),
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      return newTeamRef;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <TeamDataContext.Provider value={{ createTeam }}>
      {children}
    </TeamDataContext.Provider>
  );
};

export default TeamDataProvider;

export const useTeamData = () => {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error("useTeamData must be used within a TeaDataProvider");
  }

  return context;
};

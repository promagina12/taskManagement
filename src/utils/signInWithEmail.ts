import auth from "@react-native-firebase/auth";
import { usersRef } from "../config/firebase";

export const signInWithEmail = async (email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const { user } = await auth().signInWithEmailAndPassword(email, password);

    const userDoc = await usersRef.doc(user.uid).get();
    if (!userDoc.exists) {
      throw new Error("User not found.");
    }
    const userData = userDoc.data();

    return userData;
  } catch (error) {
    throw error;
  }
};

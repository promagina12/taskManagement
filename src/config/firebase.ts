import firestore from "@react-native-firebase/firestore";

export const usersRef = firestore().collection("users");
export const tasksRef = firestore().collection("tasks");
export const boardsRef = firestore().collection("boards");

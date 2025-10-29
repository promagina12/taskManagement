import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { IUser } from "./users";

export interface ITask {
  name?: string;
  date?: FirebaseFirestoreTypes.Timestamp;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
  start_time?: FirebaseFirestoreTypes.Timestamp;
  end_time?: FirebaseFirestoreTypes.Timestamp;
  user_id?: string;
  id?: string;
  status?: "inProgress" | "completed" | "todo";
  members?: string[];
  membersInfo?: IUser[];
}

export interface IBoard {
  name: string;
  id?: string;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
}

export type TaskFormData = {
  name: string;
  date: Date;
  start_time: Date;
  end_time: Date;
};

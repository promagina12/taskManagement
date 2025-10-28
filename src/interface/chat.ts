import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { IUser } from "./users";

export interface IChat {
  id?: string;
  users?: string[];
  otherUser?: IUser;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
}

export interface IMessages {
  id?: string;
  content?: string;
  senderData?: IUser;
  time?: FirebaseFirestoreTypes.Timestamp;
}

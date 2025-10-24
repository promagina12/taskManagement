import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  username?: string;
  number?: number;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
}

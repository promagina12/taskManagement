import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  username?: string;
  number?: string;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
  image?: string | null;
}

export type ProfileFormData = {
  name: string;
  email: string;
  username: string;
  number: string;
};

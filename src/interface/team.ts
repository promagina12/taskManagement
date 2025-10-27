import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface ITeam {
  name?: string;
  id?: string;
  date_created?: FirebaseFirestoreTypes.Timestamp;
  date_updated?: FirebaseFirestoreTypes.Timestamp;
  members?: string[];
  user_id?: string;
  type?: "Public" | "Private" | "Secret";
  image?: string;
}

export type TeamFormData = {
  name: string;
};

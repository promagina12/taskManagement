import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ITask } from "./task";

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  BottomStack: undefined;
  AddTask: { actions: string; itemId: string; data: ITask };
  CreateTeam: undefined;
  ManageProfile: undefined;
  Search: undefined;
  Settings: undefined;
  EditProfile: undefined;
  Langauge: undefined;
  Calendar: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IUser } from "./users";

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  BottomStack: undefined;
  AddTask: { actions: string; itemId: string };
  CreateTeam: { actions: string; itemId: string };
  ManageProfile: undefined;
  Search: undefined;
  Settings: undefined;
  EditProfile: undefined;
  Langauge: undefined;
  Calendar: undefined;
  Messages: { chatId: string; otherUser: IUser };
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import TeamMemberModal from "../components/modal/TeamMemberModal";

registerSheet("TeamMember", TeamMemberModal);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'TeamMember': SheetDefinition;
  }
}

export {};

import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserData } from "./UserDataProvider";
import { teamsRef, usersRef } from "../config/firebase";
import firestore from "@react-native-firebase/firestore";
import { ITeam, TeamFormData } from "../interface/team";
import { IUser } from "../interface/users";

interface ITeamDataProvider {
  createTeam: (data: TeamFormData) => Promise<any>;
  getTeamById: (id: string, callback: (team: ITeam) => void) => Promise<void>;
  updateTeambyId: (data: TeamFormData, id: string) => Promise<void>;
  getUserTeams: (callback: (teams: ITeam[]) => void) => Promise<void>;
  teams: ITeam[];
  setTeams: React.Dispatch<React.SetStateAction<ITeam[]>>;
}

interface Props {
  children: React.ReactNode;
}

export const TeamDataContext = createContext<ITeamDataProvider | undefined>(
  undefined
);

const TeamDataProvider: React.FC<Props> = ({ children }) => {
  const { currentUID, setMembers } = useUserData();
  const [teams, setTeams] = useState<ITeam[]>([]);

  const createTeam = async (data: TeamFormData) => {
    try {
      const newTeamRef = await teamsRef.add({
        ...data,
        user_id: currentUID,
        date_created: firestore.FieldValue.serverTimestamp(),
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      setMembers([]);

      return newTeamRef;
    } catch (error) {
      setMembers([]);

      console.log("ERROR: ", error);
    }
  };

  const getUserTeams = async (callback: (teams: ITeam[]) => void) => {
    teamsRef
      .where("user_id", "==", currentUID)
      .onSnapshot((documentSnapshot) => {
        let newTeams: ITeam[] = [];

        newTeams = documentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(newTeams);
      });
  };

  const getTeamById = async (id: string, callback: (team: ITeam) => void) => {
    teamsRef.doc(id).onSnapshot(async (documentSnapshot) => {
      let team: ITeam | null = null;

      const members = documentSnapshot.data()?.members;

      if (members && members.length > 0) {
        const membersData = await Promise.all(
          members.map(async (memberId: string) => {
            const userDoc = await usersRef.doc(memberId).get();
            return { id: userDoc.id, ...userDoc.data() };
          })
        );

        setMembers(membersData as IUser[]);
      } else {
        setMembers([]);
      }

      team = {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      };

      callback(team);
    });
  };

  const updateTeambyId = async (data: TeamFormData, id: string) => {
    try {
      const response = await teamsRef.doc(id).update({
        ...data,
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      setMembers([]);

      return response;
    } catch (error) {
      setMembers([]);
      console.log("ERROR: ", error);
    }
  };

  return (
    <TeamDataContext.Provider
      value={{
        createTeam,
        getUserTeams,
        getTeamById,
        updateTeambyId,
        teams,
        setTeams,
      }}
    >
      {children}
    </TeamDataContext.Provider>
  );
};

export default TeamDataProvider;

export const useTeamData = () => {
  const context = useContext(TeamDataContext);
  if (context === undefined) {
    throw new Error("useTeamData must be used within a TeaDataProvider");
  }

  return context;
};

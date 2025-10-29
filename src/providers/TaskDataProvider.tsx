import React, { createContext, useContext, useState } from "react";
import { ITask, TaskFormData } from "../interface/task";
import { tasksRef, usersRef } from "../config/firebase";
import { useUserData } from "./UserDataProvider";
import firestore from "@react-native-firebase/firestore";
import { IUser } from "../interface/users";

export interface ITaskDataProvider {
  createTask: (data: TaskFormData) => Promise<any>;
  getUserTasks: (callback: (tasks: ITask[]) => void) => Promise<void>;
  updateTaskbyId: (data: TaskFormData, id: string) => Promise<void>;
  getTaskbyId: (id: string, callback: (task: ITask) => void) => Promise<void>;
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  searchTaskbyName: (searchText: string) => Promise<ITask[] | undefined>;
}

interface Props {
  children: React.ReactNode;
}

export const TaskDataContext = createContext<ITaskDataProvider | undefined>(
  undefined
);

const TaskDataProvider: React.FC<Props> = ({ children }) => {
  const { currentUID, setMembers } = useUserData();
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = async (data: TaskFormData) => {
    const date = firestore.Timestamp.fromDate(data.date);
    const start_time = firestore.Timestamp.fromDate(data.start_time);
    const end_time = firestore.Timestamp.fromDate(data.end_time);

    try {
      const newTaskRef = await tasksRef.add({
        ...data,
        nameLowercase: data.name.toLowerCase(),
        user_id: currentUID,
        date,
        start_time,
        end_time,
        status: "todo",
        date_created: firestore.FieldValue.serverTimestamp(),
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      setMembers([]);

      return newTaskRef;
    } catch (error) {
      setMembers([]);
      console.log("ERROR: ", error);
    }
  };

  const getUserTasks = async (callback: (tasks: ITask[]) => void) => {
    tasksRef
      .where("user_id", "==", currentUID)
      .onSnapshot(async (documentSnapshot) => {
        let tasks: ITask[] = [];

        const members = documentSnapshot.docs.map(async (doc) => {
          const members = doc.data()?.members;

          if (members && members.length > 0) {
            const membersData = await Promise.all(
              members.map(async (memberId: string) => {
                const userDoc = await usersRef.doc(memberId).get();
                return { id: userDoc.id, ...userDoc.data() };
              })
            );

            return {
              id: doc.id,
              ...doc.data(),
              membersInfo: membersData,
            };
          }

          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        tasks = await Promise.all(members);

        callback(tasks);
      });
  };

  const getTaskbyId = async (id: string, callback: (task: ITask) => void) => {
    tasksRef.doc(id).onSnapshot(async (documentSnapshot) => {
      let task: ITask | null = null;

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

      task = {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      };

      callback(task);
    });
  };

  const updateTaskbyId = async (data: TaskFormData, id: string) => {
    try {
      const response = await tasksRef.doc(id).update({
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

  const searchTaskbyName = async (searchText: string) => {
    try {
      const querySnapshot = await tasksRef
        .where("user_id", "==", currentUID)
        .where("nameLowercase", ">=", searchText.toLowerCase())
        .where("nameLowercase", "<=", searchText.toLowerCase() + "\uf8ff")
        .orderBy("nameLowercase")
        .get();

      const searchedTasks: ITask[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return searchedTasks;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <TaskDataContext.Provider
      value={{
        createTask,
        getUserTasks,
        updateTaskbyId,
        getTaskbyId,
        tasks,
        setTasks,
        searchTaskbyName,
      }}
    >
      {children}
    </TaskDataContext.Provider>
  );
};

export default TaskDataProvider;

export const useTaskData = () => {
  const context = useContext(TaskDataContext);
  if (context === undefined) {
    throw new Error("useTaskData must be used within a TaskDataProvider");
  }

  return context;
};

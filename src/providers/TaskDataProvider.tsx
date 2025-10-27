import React, { createContext, useContext, useState } from "react";
import { ITask, TaskFormData } from "../interface/task";
import { tasksRef } from "../config/firebase";
import { useUserData } from "./UserDataProvider";
import firestore from "@react-native-firebase/firestore";

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
  const { currentUID } = useUserData();
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = async (data: TaskFormData) => {
    const date = firestore.Timestamp.fromDate(data.date);
    const start_time = firestore.Timestamp.fromDate(data.start_time);
    const end_time = firestore.Timestamp.fromDate(data.end_time);

    try {
      const newTaskRef = await tasksRef.add({
        ...data,
        user_id: currentUID,
        date,
        start_time,
        end_time,
        date_created: firestore.FieldValue.serverTimestamp(),
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      return newTaskRef;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const getUserTasks = async (callback: (tasks: ITask[]) => void) => {
    tasksRef
      .where("user_id", "==", currentUID)
      .onSnapshot((documentSnapshot) => {
        let tasks: ITask[] = [];

        tasks = documentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(tasks);
      });
  };

  const getTaskbyId = async (id: string, callback: (task: ITask) => void) => {
    tasksRef.doc(id).onSnapshot((documentSnapshot) => {
      let task: ITask | null = null;

      task = {
        id: documentSnapshot.id,
        ...documentSnapshot.data(),
      };

      callback(task);
    });
  };

  const updateTaskbyId = async (data: TaskFormData, id: string) => {
    const { date, end_time, name, start_time } = data;

    try {
      const response = await tasksRef.doc(id).update({
        date,
        end_time,
        name,
        start_time,
        date_updated: firestore.FieldValue.serverTimestamp(),
      });

      return response;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const searchTaskbyName = async (searchText: string) => {
    try {
      const querySnapshot = await tasksRef
        .where("user_id", "==", currentUID)
        .orderBy("name")
        .startAt(searchText)
        .endAt(searchText + "\uf8ff")
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

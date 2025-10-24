import React, { createContext, useContext } from "react";
import { TaskFormData } from "../interface/task";
import { tasksRef } from "../config/firebase";
import { useUserData } from "./UserDataProvider";
import firestore from "@react-native-firebase/firestore";

export interface ITaskDataProvider {
  createTask: (data: TaskFormData) => Promise<any>;
}

interface Props {
  children: React.ReactNode;
}

export const TaskDataContext = createContext<ITaskDataProvider | undefined>(
  undefined
);

const TaskDataProvider: React.FC<Props> = ({ children }) => {
  const { currentUID } = useUserData();

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

  return (
    <TaskDataContext.Provider value={{ createTask }}>
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

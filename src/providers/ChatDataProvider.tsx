import React, { createContext, useCallback, useContext } from "react";
import { useUserData } from "./UserDataProvider";
import { chatsRef, usersRef } from "../config/firebase";
import { IChat, IMessages } from "../interface/chat";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export interface IChatDataProvider {
  getAllChats: (callback: (chats: IChat[]) => void) => Promise<void>;
  getMessagesbyChatId: (
    chatId: string,
    callback: (messages: IMessages[]) => void
  ) => Promise<void>;
  sendMessage: (
    chatId: string,
    content: string
  ) => Promise<
    | FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>
    | undefined
  >;
}

interface Props {
  children: React.ReactNode;
}

export const ChatDataContext = createContext<IChatDataProvider | undefined>(
  undefined
);

const ChatDataProvider: React.FC<Props> = ({ children }) => {
  const { currentUID, currentUserData } = useUserData();

  const getAllChats = async (callback: (chats: IChat[]) => void) => {
    chatsRef
      .where("users", "array-contains", currentUID)
      .onSnapshot(async (documentSnapshot) => {
        let chat: IChat[] = [];

        const newDoc = documentSnapshot?.docs.map(async (doc) => {
          const otherUserId = doc
            .data()
            .users.find((id: string) => id !== currentUID);

          const user = await usersRef.doc(otherUserId).get();

          console.log("otherUser: ", user);
          return {
            id: doc.id,
            ...doc.data(),
            otherUser: {
              id: user.id,
              ...user.data(),
            },
          };
        });

        chat = await Promise.all(newDoc);

        callback(chat);
      });
  };

  const getMessagesbyChatId = async (
    chatId: string,
    callback: (messages: IMessages[]) => void
  ) => {
    chatsRef
      .doc(chatId)
      .collection("messages")
      .orderBy("time", "desc")
      .onSnapshot((documentSnapshot) => {
        let messages: IMessages[] = [];

        messages = documentSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(messages);
      });
  };

  const sendMessage = async (chatId: string, content: string) => {
    try {
      const newMessage = await chatsRef
        .doc(chatId)
        .collection("messages")
        .add({
          content,
          senderData: {
            id: currentUID,
            name: currentUserData?.name,
            image: currentUserData?.image,
          },
          time: firestore.FieldValue.serverTimestamp(),
        });

      return newMessage;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <ChatDataContext.Provider
      value={{ getAllChats, getMessagesbyChatId, sendMessage }}
    >
      {children}
    </ChatDataContext.Provider>
  );
};

export default ChatDataProvider;

export const useChatData = () => {
  const context = useContext(ChatDataContext);
  if (context === undefined) {
    throw new Error("useChatData must be used within a TaskDataProvider");
  }

  return context;
};

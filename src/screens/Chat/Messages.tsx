import { View, StyleSheet, FlatList, LayoutRectangle } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/colors";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../interface/stack";
import MessageHeader from "./Components/MessageHeader";
import { useChatData } from "../../providers/ChatDataProvider";
import { IMessages } from "../../interface/chat";
import MessageCard from "./Components/MessageCard";
import { useUserData } from "../../providers/UserDataProvider";
import MessageInput from "./Components/MessageInput";

type Props = RouteProp<RootStackParamList, "Messages">;

const Messages = () => {
  const params = useRoute<Props>().params;
  const { chatId, otherUser } = params || {};
  const { currentUID } = useUserData();
  const { getMessagesbyChatId, sendMessage } = useChatData();
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [messageInputLayout, setMessageInputLayout] =
    useState<LayoutRectangle | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getMessagesbyChatId(chatId, (messages) => setMessages(messages));
  }, []);

  const onSendMessage = () => {
    if (message) {
      sendMessage(chatId, message);
      setMessage("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MessageHeader image={otherUser?.image} name={otherUser?.name} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingTop: messageInputLayout?.height,
            paddingBottom: 20,
          }}
          inverted
          renderItem={({ item }) => (
            <MessageCard item={item} currentUID={currentUID} />
          )}
        />
      </View>
      <MessageInput
        onLayout={(event) => setMessageInputLayout(event.nativeEvent.layout)}
        onChangeText={setMessage}
        value={message}
        onPressSend={onSendMessage}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {},
});

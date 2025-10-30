import { View, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Page from "../../Layouts/Page";
import AddSVG from "../../assets/AppIcon/add";
import { colors } from "../../styles/colors";
import Style from "../../styles/Style";
import SearchBar from "../../components/SearchBar";
import ChatCard from "./Components/ChatCard";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useChatData } from "../../providers/ChatDataProvider";
import { IChat } from "../../interface/chat";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import { useTheme } from "../../providers/ThemeProvider";

const Chat = () => {
  const { getAllChats } = useChatData();
  const { theme } = useTheme();
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    getAllChats((user) => setChats(user));
  }, []);

  return (
    <Page
      headerType="NAVIGATION"
      title="Chat"
      rightComponent={() => (
        <Pressable
          style={{
            ...styles.addContainer,
            borderColor: theme.borderColor,
          }}
          onPress={() => navigate(ROUTES.CreateChat)}
        >
          <AddSVG color={theme.secondary} size={20} />
        </Pressable>
      )}
    >
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatCard
            name={item.otherUser?.name}
            image={item.otherUser?.image}
            onPress={() =>
              navigate(ROUTES.Messages, {
                chatId: item.id,
                otherUser: item.otherUser,
              })
            }
          />
        )}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: responsiveHeight(20),
          flexGrow: 1,
          paddingTop: 30,
        }}
        ListHeaderComponent={
          <View style={{ marginBottom: 14 }}>
            <SearchBar placeholder="Search" />
          </View>
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: theme.borderColor,
              marginTop: 16,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Page>
  );
};

export default Chat;

const styles = StyleSheet.create({
  addContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.lightBlue,
  },
});

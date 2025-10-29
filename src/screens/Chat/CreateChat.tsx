import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Page from "../../Layouts/Page";
import SearchBar from "../../components/SearchBar";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useUserData } from "../../providers/UserDataProvider";
import { useChatData } from "../../providers/ChatDataProvider";
import { IUser } from "../../interface/users";
import { filter } from "lodash";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import UserProfileCard from "../../components/UserProfileCard";

const CreateChat = () => {
  const { users, currentUID } = useUserData();
  const { createChat } = useChatData();
  const [newUsers, setNewUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const newData = filter(users, (user) => user.id !== currentUID);
    setNewUsers(newData);
  }, []);

  const onPressUser = async (id: string) => {
    const newChat = await createChat(id);

    navigate(ROUTES.Messages, {
      chatId: newChat,
      otherUser: users.find((user) => user.id === id),
    });
  };

  return (
    <Page headerType="NAVIGATION" title="Create Chat">
      <View style={{ flex: 1, marginTop: 20, gap: 30 }}>
        <SearchBar placeholder="Search" />
        <FlatList
          data={newUsers}
          contentContainerStyle={{
            gap: 16,
            paddingBottom: responsiveHeight(20),
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserProfileCard
              onPress={() => onPressUser(item.id!)}
              image={item.image}
              name={item.name}
            />
          )}
        />
      </View>
    </Page>
  );
};

export default CreateChat;

const styles = StyleSheet.create({
  emptyProfile: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

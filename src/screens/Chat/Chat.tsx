import { View, Pressable, StyleSheet, FlatList } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import AddSVG from "../../assets/AppIcon/add";
import { colors } from "../../styles/colors";
import Style from "../../styles/Style";
import SearchBar from "../../components/SearchBar";
import ChatCard from "./Components/ChatCard";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Chat = () => {
  return (
    <Page
      headerType="NAVIGATION"
      title="Chat"
      rightComponent={() => (
        <Pressable style={styles.addContainer}>
          <AddSVG color={colors.darkBlue} size={20} />
        </Pressable>
      )}
    >
      <FlatList
        data={Array.from({ length: 10 })}
        renderItem={() => <ChatCard />}
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
            style={{ height: 1, backgroundColor: "#E9F1FF", marginTop: 16 }}
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

import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import moment from "moment";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import TeamCard from "./components/TeamCard";
import { responsiveWidth } from "react-native-responsive-dimensions";

const Home = () => {
  return (
    <Page
      title={moment().format("dddd, DD")}
      scrollEnabled
      containerStyle={{ paddingHorizontal: 0 }}
      headerStyle={{ paddingHorizontal: 24 }}
    >
      <View style={{ flex: 1, gap: 30, paddingHorizontal: 24 }}>
        <Text style={styles.title}>Let’s make a{"\n"}habits together 🙌</Text>
        <View style={{ width: responsiveWidth(100), left: -24 }}>
          <FlatList
            horizontal
            data={Array.from({ length: 5 })}
            renderItem={({ item }) => <TeamCard />}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 24 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
});

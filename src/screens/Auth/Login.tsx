import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";

const Login = () => {
  return (
    <Page headerType="NAVIGATION" title="Sign In">
      <View style={{ flex: 1, paddingTop: 30 }}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>
          Please Inter your email address{"\n"}and password for Login
        </Text>
      </View>
    </Page>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  subTitle: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
});

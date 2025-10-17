import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import Style from "../../styles/Style";
import Page from "../../Layouts/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AppleLogoSVG from "../../assets/AppIcon/appleLogo";
import GoogleLogoSVG from "../../assets/AppIcon/googleLogo";
import { goBack } from "../../navigation/NavigationService";

const Register = () => {
  return (
    <Page headerType="NAVIGATION" title="Sign Up">
      <View style={{ flex: 1, paddingTop: 30, gap: 40 }}>
        <View style={{ gap: 2 }}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subTitle}>
            Please Inter your Informatioin and{"\n"}create your account
          </Text>
        </View>
        <View style={{ gap: 30 }}>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your mail" />
          <Input type="password" placeholder="Enter your password" />
          <Button title="Sign Up" linearShadow />
        </View>
        <View style={{ ...Style.containerCenter, gap: 30 }}>
          <Text style={styles.signIn}>Signup With</Text>
          <View
            style={{
              ...Style.containerRow,
              gap: 30,
            }}
          >
            <Pressable style={styles.iconContainer}>
              <AppleLogoSVG />
            </Pressable>
            <Pressable style={styles.iconContainer}>
              <GoogleLogoSVG />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            ...Style.containerRow,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...styles.signIn,
              fontFamily: FONT_FAMILY.poppinsRegular,
            }}
          >
            Have an Account?{" "}
          </Text>
          <Pressable onPress={goBack}>
            <Text style={styles.signUp}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </Page>
  );
};

export default Register;

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
  forgotPassword: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  iconContainer: {
    ...Style.containerCenter,
    width: 60,
    height: 58,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 16,
  },
  signIn: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  signUp: {
    fontSize: 14,
    color: colors.purple,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
});

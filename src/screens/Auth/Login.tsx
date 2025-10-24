import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AppleLogoSVG from "../../assets/AppIcon/appleLogo";
import GoogleLogoSVG from "../../assets/AppIcon/googleLogo";
import Style from "../../styles/Style";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";
import { signInWithEmail } from "../../utils/signInWithEmail";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = async () => {
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Page headerType="NAVIGATION" title="Sign In">
      <View style={{ flex: 1, paddingTop: 30, gap: 40 }}>
        <View style={{ gap: 2 }}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subTitle}>
            Please Inter your email address{"\n"}and password for Login
          </Text>
        </View>
        <View style={{ gap: 30 }}>
          <Input
            placeholder="Enter your mail"
            value={email}
            onChangeText={setEmail}
          />
          <View style={{ gap: 16 }}>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
            />
            <Pressable style={{ alignSelf: "flex-end" }}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Button title="Sign In" linearShadow onPress={onLogin} />
        </View>
        <View style={{ ...Style.containerCenter, gap: 30 }}>
          <Text style={styles.signIn}>Signin with</Text>
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
            Not Registrar Yet?{" "}
          </Text>
          <Pressable onPress={() => navigate(ROUTES.Register)}>
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>
        </View>
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

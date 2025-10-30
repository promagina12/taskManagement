import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import Style from "../../styles/Style";
import Page from "../../Layouts/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AppleLogoSVG from "../../assets/AppIcon/appleLogo";
import GoogleLogoSVG from "../../assets/AppIcon/googleLogo";
import { goBack } from "../../navigation/NavigationService";
import { useUserData } from "../../providers/UserDataProvider";
import { useTheme } from "../../providers/ThemeProvider";

const Register = () => {
  const { registerUser } = useUserData();
  const { theme, isDark } = useTheme();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onRegister = async () => {
    try {
      const data = {
        email,
        password,
        name,
      };

      await registerUser(data as any);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <Page headerType="NAVIGATION" title="Sign Up">
      <View style={{ flex: 1, paddingTop: 30, gap: 40 }}>
        <View style={{ gap: 2 }}>
          <Text
            style={{
              ...styles.title,
              color: theme.secondary,
            }}
          >
            Create Account
          </Text>
          <Text style={styles.subTitle}>
            Please Inter your Informatioin and{"\n"}create your account
          </Text>
        </View>
        <View style={{ gap: 30 }}>
          <Input
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <Input
            placeholder="Enter your mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Sign Up" linearShadow onPress={onRegister} />
        </View>
        <View style={{ ...Style.containerCenter, gap: 30 }}>
          <Text style={styles.signIn}>Signup With</Text>
          <View
            style={{
              ...Style.containerRow,
              gap: 30,
            }}
          >
            <Pressable
              style={{
                ...styles.iconContainer,
                borderColor: theme.borderColor,
              }}
            >
              <AppleLogoSVG color={theme.secondary} />
            </Pressable>
            <Pressable
              style={{
                ...styles.iconContainer,
                borderColor: theme.borderColor,
              }}
            >
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
              color: isDark ? colors.white : colors.gray,
              fontFamily: FONT_FAMILY.poppinsRegular,
            }}
          >
            Have an Account?{" "}
          </Text>
          <Pressable onPress={goBack}>
            <Text
              style={{
                ...styles.signUp,
                color: theme.primary,
              }}
            >
              Sign In
            </Text>
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

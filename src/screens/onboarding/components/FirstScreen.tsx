import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { placeholder } from "../../../assets";
import { FONT_FAMILY } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { useTheme } from "../../../providers/ThemeProvider";

const FirstScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={{ width: responsiveWidth(100) }}>
      <View style={{ height: "60%", paddingRight: 30 }}>
        <Image
          source={placeholder.onboardingBG}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={theme.onBoarding1}
          style={{
            position: "absolute",
            top: 26,
            right: 18,
            width: "95%",
            height: "80%",
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text
          style={{
            ...styles.title,
            color: theme.primary,
          }}
        >
          Task Management
        </Text>
        <Text
          style={{
            ...styles.subTitle,
            color: theme.secondary,
          }}
        >
          Let's create a{" "}
          <Text
            style={{
              ...styles.span,
              color: theme.primary,
            }}
          >
            space
          </Text>{" "}
          for your workflows.
        </Text>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  subTitle: {
    fontSize: 45,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  span: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    color: colors.purple,
  },
});

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { placeholder } from "../../../assets";
import { FONT_FAMILY } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import Style from "../../../styles/Style";

const SecondScreen = () => {
  return (
    <View style={{ width: responsiveWidth(100) }}>
      <View
        style={{ height: "60%", paddingRight: 30, ...Style.containerCenter }}
      >
        <Image
          source={placeholder.onboardingBG}
          style={{ width: "100%", height: "100%" }}
        />
        <View style={{ position: "absolute" }}>
          <Image source={placeholder.onboarding2} resizeMode="contain" />
          <Image
            source={placeholder.chatBox1}
            style={{ position: "absolute", top: 15 }}
          />
          <Image
            source={placeholder.chatBox2}
            style={{ position: "absolute", right: 10, top: 90 }}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.title}>Task Management</Text>
        <Text style={styles.subTitle}>
          Work more <Text style={styles.span}>Structured</Text> and Organized 👌
        </Text>
      </View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.poppinsMedium,
    color: colors.purple,
  },
  subTitle: {
    fontSize: 45,
    fontFamily: FONT_FAMILY.poppinsRegular,
    color: colors.darkBlue,
  },
  span: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    color: colors.purple,
  },
});

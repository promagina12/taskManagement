import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Style from "../../../styles/Style";
import { placeholder } from "../../../assets";
import { FONT_FAMILY } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";

const ThirdScreen = () => {
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
          <Image source={placeholder.onboarding3} resizeMode="contain" />
          <Image
            source={placeholder.chatBox3}
            style={{ position: "absolute", top: -35, left: -30 }}
          />
          <Image
            source={placeholder.chatBox4}
            style={{ position: "absolute", right: -33, top: 125 }}
          />
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.title}>Task Management</Text>
        <Text style={styles.subTitle}>
          Manage your <Text style={styles.span}>Tasks</Text> quickly for Results✌
        </Text>
      </View>
    </View>
  );
};

export default ThirdScreen;

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

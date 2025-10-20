import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import Style from "../../../styles/Style";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";

const ProgressCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.regText}>ProgressCard</Text>
        <Text style={styles.medText}>Create Detail Booking</Text>
        <Text style={styles.regText}>2 min ago</Text>
      </View>
      <Progress.Circle
        size={44}
        thickness={4}
        color={colors.purple}
        unfilledColor={"#D1E2FE"}
        progress={0.2}
        borderWidth={0}
        showsText
        animated={false}
        strokeCap="round"
        textStyle={styles.progressText}
      />
    </View>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({
  container: {
    ...Style.containerRow,
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.lightBlue,
  },
  regText: {
    fontSize: 12,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  medText: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  progressText: {
    fontSize: 12,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
});

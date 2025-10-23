import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import Style from "../../../styles/Style";

const pieData = [
  { value: 40, color: "#B1D199" },
  { value: 30, color: "#FFB35A" },
  { value: 30, color: "#756EF3" },
];

interface Props {
  labelData?: { label: string; color: string }[];
}

const StatusChart = ({ labelData }: Props) => {
  return (
    <View
      style={{
        ...Style.containerCenter,
        gap: 40,
        paddingHorizontal: 12,
      }}
    >
      <PieChart
        donut
        innerRadius={70}
        radius={100}
        data={pieData}
        centerLabelComponent={() => {
          return (
            <View style={Style.containerCenter}>
              <Text style={styles.percentage}>70%</Text>
              <Text style={styles.completeText}>Complete</Text>
            </View>
          );
        }}
      />
      <View style={{ ...Style.containerRow, gap: 26, width: "100%" }}>
        {labelData?.map((item, index) => (
          <View key={index} style={styles.labelContainer}>
            <View
              style={{ ...styles.colorContainer, backgroundColor: item.color }}
            />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StatusChart;

const styles = StyleSheet.create({
  percentage: {
    fontSize: 30,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  completeText: {
    fontSize: 18,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  label: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  labelContainer: {
    ...Style.containerRow,
    gap: 10,
    flex: 1,
    justifyContent: "center",
  },
  colorContainer: {
    width: 8,
    height: 8,
    borderRadius: 10,
  },
});

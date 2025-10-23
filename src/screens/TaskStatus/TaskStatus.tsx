import { View, Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import FilterSVG from "../../assets/AppIcon/filter";
import StatusChart from "./components/StatusChart";
import { FONT_FAMILY } from "../../styles/fonts";
import ThreeDotsHorizontalSVG from "../../assets/AppIcon/threeDotsHorizontal";

const PIE_LABEL = [
  {
    label: "To Do",
    color: "#B1D199",
  },
  {
    label: "In Progress",
    color: "#FFB35A",
  },
  {
    label: "Completed",
    color: "#756EF3",
  },
];

const TaskStatus = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Page
      headerType="NAVIGATION"
      title="Task Status"
      rightComponent={() => (
        <Pressable style={styles.addContainer}>
          <FilterSVG />
        </Pressable>
      )}
    >
      <View style={{ flex: 1, paddingTop: 30, gap: 30 }}>
        <StatusChart labelData={PIE_LABEL} />
        <View style={{ gap: 12 }}>
          <Text style={styles.monthly}>Monthly</Text>
          <View style={{ gap: 16 }}>
            {PIE_LABEL.map((item, index) => {
              const status =
                item.label === "Completed"
                  ? "Task Completed"
                  : item.label === "In Progress"
                  ? "started"
                  : "Upcoming";

              return (
                <Pressable
                  key={index}
                  style={{
                    ...styles.statusContainer,
                    borderColor:
                      selected === index ? colors.purple : colors.lightBlue,
                  }}
                  onPress={() => setSelected(index)}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.subText}>
                      18 Task now • 18 {status}
                    </Text>
                  </View>
                  <Pressable>
                    <ThreeDotsHorizontalSVG />
                  </Pressable>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </Page>
  );
};

export default TaskStatus;

const styles = StyleSheet.create({
  addContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.lightBlue,
  },
  monthly: {
    fontSize: 18,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  statusContainer: {
    ...Style.containerRow,
    borderWidth: 1,
    height: 70,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 10,
  },
  label: {
    fontSize: 16,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  subText: {
    fontSize: 12,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
});

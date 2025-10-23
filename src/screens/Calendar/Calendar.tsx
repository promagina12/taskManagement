import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import PenSVG from "../../assets/AppIcon/pen";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";

const Calendar = () => {
  return (
    <Page
      title="Today Task"
      headerType="NAVIGATION"
      rightComponent={() => (
        <Pressable style={styles.editContainer}>
          <PenSVG />
        </Pressable>
      )}
    ></Page>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  editContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.lightBlue,
  },
});

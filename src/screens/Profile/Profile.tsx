import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { act } from "react";
import Page from "../../Layouts/Page";
import { placeholder } from "../../assets";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import Style from "../../styles/Style";
import TaskContainer from "../Projects/components/TaskContainer";
import ClockSVG from "../../assets/AppIcon/clock";
import CheckSVG from "../../assets/AppIcon/check";
import SettingsButton from "../../components/SettingsButton";

const BUTTONS = [
  {
    title: "My Projects",
    action: () => {},
  },
  {
    title: "Join a Team",
    action: () => {},
  },
  {
    title: "Settings",
    action: () => {},
  },
  {
    title: "My Task",
    action: () => {},
  },
];

const Profile = () => {
  return (
    <Page headerType="NAVIGATION" title="Profile" scrollEnabled>
      <View style={{ flex: 1, paddingTop: 20, gap: 37 }}>
        <View style={{ gap: 28 }}>
          <View style={{ gap: 20, ...Style.containerCenter }}>
            <Image
              source={placeholder.avatar}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <View style={Style.containerCenter}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.email}>johndoe@example.com</Text>
              <Pressable style={styles.editButton}>
                <Text style={styles.edit}>Edit</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ ...Style.containerRow }}>
            <TaskContainer icon={<ClockSVG />} count="5" subtitle="On Going" />
            <Image source={placeholder.spacer} style={{ height: "100%" }} />
            <TaskContainer
              icon={<CheckSVG />}
              count="25"
              subtitle="Total Complete"
            />
          </View>
        </View>
        <View style={{ gap: 16 }}>
          {BUTTONS.map((button, index) => (
            <SettingsButton
              title={button.title}
              key={index}
              onPress={button.action}
            />
          ))}
        </View>
      </View>
    </Page>
  );
};

export default Profile;

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  email: {
    fontSize: 12,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  edit: {
    fontSize: 12,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 8,
    marginTop: 10,
  },
});

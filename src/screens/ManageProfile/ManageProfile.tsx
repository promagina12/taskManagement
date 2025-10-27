import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import ManageCard from "./components/ManageCard";
import { reset } from "../../navigation/NavigationService";
import Button from "../../components/Button";
import { useUserData } from "../../providers/UserDataProvider";
import { ROUTES } from "../../navigation/Routes";
import ProfileSVG from "../../assets/AppIcon/profile";
import { useTaskData } from "../../providers/TaskDataProvider";

const ManageProfile = () => {
  const { onSignOut, currentUserData } = useUserData();
  const { tasks } = useTaskData();

  const onLogOut = async () => {
    await onSignOut();
    reset({
      index: 0,
      routes: [{ name: ROUTES.Login }],
    });
  };

  return (
    <Page
      headerType="CLOSE"
      bottomComponent={() => (
        <View style={{ paddingVertical: 10 }}>
          <Button title="Log Out" onPress={onLogOut} />
        </View>
      )}
    >
      <View style={{ flex: 1, paddingTop: 20, gap: 30 }}>
        <View style={{ gap: 30 }}>
          <View style={{ gap: 20, ...Style.containerCenter }}>
            {currentUserData?.image ? (
              <Image
                source={{ uri: currentUserData?.image }}
                style={{ width: 100, height: 100, borderRadius: 100 }}
              />
            ) : (
              <View style={styles.emptyProfile}>
                <ProfileSVG size={100} color={colors.darkBlue} />
              </View>
            )}
            <View style={Style.containerCenter}>
              <Text style={styles.name}>{currentUserData?.name}</Text>
              <Text style={styles.email}>@{currentUserData?.username}</Text>
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>View Profile</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ gap: 15 }}>
            <Text style={styles.manage}>Workspace</Text>
            <View style={styles.uiDesignContainer}>
              <Text style={styles.uiDesign}>Ui Design</Text>
              <Pressable
                style={{
                  ...styles.buttonContainer,
                  marginTop: 0,
                }}
              >
                <Text style={styles.buttonText}>Invite</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <Text style={styles.manage}>Manage</Text>
          <View style={{ gap: 16 }}>
            <View
              style={{
                ...Style.containerRow,
                gap: 23,
              }}
            >
              <ManageCard label="Team" value={8} />
              <ManageCard label="Labels" value={13} />
            </View>
            <View
              style={{
                ...Style.containerRow,
                gap: 23,
              }}
            >
              <ManageCard label="Task" value={tasks.length} />
              <ManageCard label="Member" value={13} />
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default ManageProfile;

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
  buttonText: {
    fontSize: 12,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 8,
    marginTop: 10,
  },
  uiDesignContainer: {
    ...Style.containerSpaceBetween,
    paddingLeft: 20,
    paddingRight: 25,
    borderWidth: 1,
    paddingVertical: 18,
    borderRadius: 16,
    borderColor: colors.lightBlue,
  },
  uiDesign: {
    fontSize: 16,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  manage: {
    fontSize: 18,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  emptyProfile: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

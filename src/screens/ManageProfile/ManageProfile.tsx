import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import Style from "../../styles/Style";
import { placeholder } from "../../assets";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import ManageCard from "./components/ManageCard";
import { goBack, reset } from "../../navigation/NavigationService";
import Button from "../../components/Button";
import { useUserData } from "../../providers/UserDataProvider";
import { ROUTES } from "../../navigation/Routes";

const ManageProfile = () => {
  const { onSignOut } = useUserData();

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
        <View style={{ gap: 68 }}>
          <View style={{ gap: 20, ...Style.containerCenter }}>
            <Image
              source={placeholder.avatar}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
            <View style={Style.containerCenter}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.email}>johndoe@example.com</Text>
              <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>View Profile</Text>
              </Pressable>
            </View>
          </View>
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
              <ManageCard label="Task" value={8} />
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
});

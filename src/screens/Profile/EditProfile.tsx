import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import { placeholder } from "../../assets";
import CameraSVG from "../../assets/AppIcon/camera";
import Style from "../../styles/Style";
import Input from "../../components/Input";

const EditProfile = () => {
  return (
    <Page
      headerType="NAVIGATION"
      title="Edit Profile"
      rightComponent={() => (
        <Pressable>
          <Text style={styles.save}>Save</Text>
        </Pressable>
      )}
    >
      <View style={{ flex: 1, paddingTop: 30, gap: 40 }}>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={placeholder.avatar}
            style={{ width: 132, height: 132, borderRadius: 100 }}
          />
          <Pressable style={styles.cameraContainer}>
            <CameraSVG size={18} color={colors.white} />
          </Pressable>
        </View>
        <View style={{ gap: 20 }}>
          <Input label="Name" value="John Doe" />
          <Input label="Email" value="johndoe@example.com" />
          <Input label="Username" value="@johndoe" />
          <Input label="Number" value="+010 2120 112312" />
        </View>
      </View>
    </Page>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  save: {
    fontSize: 14,
    color: colors.purple,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  cameraContainer: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: colors.darkBlue,
    borderWidth: 1,
    borderColor: colors.white,
    ...Style.containerCenter,
    position: "absolute",
    bottom: 3,
    right: 10,
  },
});

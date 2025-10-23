import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import AddSVG from "../../assets/AppIcon/add";
import { colors } from "../../styles/colors";
import Style from "../../styles/Style";
import { FONT_FAMILY } from "../../styles/fonts";
import Input from "../../components/Input";
import TeamMember from "../AddTask/components/TeamMember";
import Badges from "../../components/Badges";
import Button from "../../components/Button";
import { goBack } from "../../navigation/NavigationService";

const TYPE = ["Private", "Public", "Secret"];

const CreateTeam = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Page
      headerType="NAVIGATION"
      title="Create Team"
      bottomComponent={() => (
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Button
            title="Create Team"
            containerStyle={{ width: 218 }}
            onPress={goBack}
          />
        </View>
      )}
    >
      <View style={{ flex: 1, marginTop: 30, gap: 30 }}>
        <View
          style={{
            ...Style.containerCenter,
            gap: 20,
          }}
        >
          <Pressable style={styles.addLogo}>
            <AddSVG color={colors.purple} size={30} />
          </Pressable>
          <View
            style={{
              ...Style.containerCenter,
            }}
          >
            <Text style={styles.uploadText}>Upload logo file</Text>
            <Text style={styles.subText}>Your logo will publish always</Text>
          </View>
        </View>
        <Input label="Team Name" placeholder="Enter Team Name" />
        <TeamMember />
        <View style={{ height: 1, backgroundColor: colors.lightBlue }} />
        <Badges
          data={TYPE}
          label="Type"
          selected={selectedType}
          onPress={(e) => setSelectedType(e)}
        />
      </View>
    </Page>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  addLogo: {
    width: 84,
    height: 84,
    borderRadius: 100,
    borderColor: colors.purple,
    borderWidth: 1,
    ...Style.containerCenter,
  },
  uploadText: {
    fontSize: 18,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  subText: {
    fontSize: 12,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
});

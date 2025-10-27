import { View, Text, Pressable, StyleSheet, Image } from "react-native";
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
import * as ImagePicker from "expo-image-picker";
import { Controller, useForm } from "react-hook-form";
import { TeamFormData } from "../../interface/team";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskSchema } from "../../utils/schema";
import { useTeamData } from "../../providers/TeamDataProvider";
import Toast from "react-native-toast-message";

const TYPE = ["Private", "Public", "Secret"];

const CreateTeam = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const { createTeam } = useTeamData();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TeamFormData>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(taskSchema),
  });

  const onSelectedLogo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const onCreateTeam = async (data: TeamFormData) => {
    const newData = {
      ...data,
      image: img,
      type: selectedType,
    };

    try {
      await createTeam(newData);

      Toast.show({
        type: "success",
        text1: "Sucess",
        text2: "Team has been created successfully",
      });

      goBack();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const onSubmit = () => {
    if (errors.name) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.name?.message,
      });
    }

    handleSubmit(onCreateTeam)();
  };

  return (
    <Page
      headerType="NAVIGATION"
      title="Create Team"
      bottomComponent={() => (
        <View style={{ paddingVertical: 10, alignItems: "center" }}>
          <Button
            title="Create Team"
            containerStyle={{ width: 218 }}
            onPress={onSubmit}
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
          {img ? (
            <Pressable style={styles.addLogo} onPress={onSelectedLogo}>
              <Image
                source={{ uri: img }}
                style={{ width: "100%", height: "100%", borderRadius: 100 }}
              />
            </Pressable>
          ) : (
            <Pressable style={styles.addLogo} onPress={onSelectedLogo}>
              <AddSVG color={colors.purple} size={30} />
            </Pressable>
          )}
          <View
            style={{
              ...Style.containerCenter,
            }}
          >
            <Text style={styles.uploadText}>Upload logo file</Text>
            <Text style={styles.subText}>Your logo will publish always</Text>
          </View>
        </View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Team Name"
              placeholder="Enter team name"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
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

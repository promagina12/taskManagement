import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Page from "../../Layouts/Page";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import { placeholder } from "../../assets";
import CameraSVG from "../../assets/AppIcon/camera";
import Style from "../../styles/Style";
import Input from "../../components/Input";
import { useUserData } from "../../providers/UserDataProvider";
import ProfileSVG from "../../assets/AppIcon/profile";
import { Controller, useForm } from "react-hook-form";
import { ProfileFormData } from "../../interface/users";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../utils/schema";
import Toast from "react-native-toast-message";
import { goBack } from "../../navigation/NavigationService";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "../../providers/ThemeProvider";

const EditProfile = () => {
  const { currentUserData, updateUserbyId, currentUID } = useUserData();
  const { theme } = useTheme();
  const [img, setImg] = useState<string | null>(null);

  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: "",
      email: "",
      username: "",
      number: "",
    },
    resolver: yupResolver(profileSchema),
  });

  useEffect(() => {
    if (currentUserData) {
      setValue("name", currentUserData?.name || "");
      setValue("email", currentUserData?.email || "");
      setValue("username", currentUserData?.username || "");
      setValue("number", currentUserData?.number || "");
      setImg(currentUserData?.image!);
    }
  }, [currentUserData]);

  const onPressImage = async () => {
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

  const onUpdateProfile = async (data: ProfileFormData) => {
    const newData = {
      ...data,
      image: img,
    };

    try {
      await updateUserbyId(newData, currentUID!);

      Toast.show({
        type: "success",
        text1: "Sucess",
        text2: "Task has been updated successfully",
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
    if (errors.email) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.email?.message,
      });
    }
    if (errors.username) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.username?.message,
      });
    }
    if (errors.number) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: errors.number?.message,
      });
    }

    handleSubmit(onUpdateProfile)();
  };

  return (
    <Page
      headerType="NAVIGATION"
      title="Edit Profile"
      rightComponent={() => (
        <Pressable onPress={onSubmit}>
          <Text
            style={{
              ...styles.save,
              color: theme.primary,
            }}
          >
            Save
          </Text>
        </Pressable>
      )}
    >
      <View style={{ flex: 1, paddingTop: 30, gap: 40 }}>
        <View style={{ alignSelf: "center" }}>
          {img ? (
            <Image
              source={{ uri: img }}
              style={{ width: 132, height: 132, borderRadius: 100 }}
            />
          ) : (
            <View
              style={{
                ...styles.emptyProfile,
                borderColor: theme.secondary,
              }}
            >
              <ProfileSVG size={122} color={theme.secondary} />
            </View>
          )}
          <Pressable
            style={{
              ...styles.cameraContainer,
              borderColor: theme.background,
            }}
            onPress={onPressImage}
          >
            <CameraSVG size={18} color={colors.white} />
          </Pressable>
        </View>
        <View style={{ gap: 20 }}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Name"
                placeholder="Enter your name"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Username"
                placeholder="Enter your username"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="username"
          />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Number"
                placeholder="Enter your phone number"
                value={value}
                onChangeText={onChange}
                textInputProps={{
                  keyboardType: "numeric",
                }}
              />
            )}
            name="number"
          />
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
  emptyProfile: {
    width: 132,
    height: 132,
    borderWidth: 2,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

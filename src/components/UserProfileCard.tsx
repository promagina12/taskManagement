import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { FC } from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import ProfileSVG from "../assets/AppIcon/profile";
import { FONT_FAMILY } from "../styles/fonts";

interface Props {
  image?: string | null;
  name?: string;
  onPress?: () => void;
}

const UserProfileCard: FC<Props> = ({ image, name, onPress }) => {
  return (
    <Pressable
      style={{
        ...Style.containerRow,
        gap: 10,
      }}
      onPress={onPress}
    >
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
      ) : (
        <View style={styles.emptyProfile}>
          <ProfileSVG size={35} color={colors.darkBlue} />
        </View>
      )}
      <Text
        style={{
          fontSize: 15,
          color: colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  emptyProfile: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

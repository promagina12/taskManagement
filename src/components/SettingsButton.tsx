import { View, Text, Pressable } from "react-native";
import React from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import ChevronRightSVG from "../assets/AppIcon/chevronRight";
import { FONT_FAMILY } from "../styles/fonts";

interface Props {
  title: string;
  onPress?: () => void;
}

const SettingsButton = ({ title, onPress }: Props) => {
  return (
    <Pressable
      style={{
        ...Style.containerSpaceBetween,
        paddingHorizontal: 20,
        height: 56,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: colors.lightBlue,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          color: colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {title}
      </Text>
      <ChevronRightSVG color={colors.darkBlue} />
    </Pressable>
  );
};

export default SettingsButton;

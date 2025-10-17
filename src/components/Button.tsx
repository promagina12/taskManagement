import { Text, Pressable, Image } from "react-native";
import React from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import { placeholder } from "../assets";

interface Props {
  linearShadow?: boolean;
  title?: string;
  onPress?: () => void | undefined;
}

const Button: React.FC<Props> = ({ linearShadow = false, onPress, title }) => {
  return (
    <Pressable
      style={{
        ...Style.containerCenter,
        backgroundColor: colors.purple,
        height: 48,
        borderRadius: 16,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          color: colors.white,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {title}
      </Text>
      {linearShadow && (
        <Image
          source={placeholder.linerShadow}
          style={{
            width: "110%",
            position: "absolute",
            bottom: -50,
            zIndex: -1,
          }}
        />
      )}
    </Pressable>
  );
};

export default Button;

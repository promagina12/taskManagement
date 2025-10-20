import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import Style from "../styles/Style";
import ChevronLeftSVG from "../assets/AppIcon/chevronLeft";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import { goBack } from "../navigation/NavigationService";

interface Props {
  title?: string;
  rightComponent?: () => ReactNode;
  onBackPressed?: () => void | undefined;
}

const NavigationHeader: React.FC<Props> = ({
  onBackPressed,
  rightComponent,
  title,
}) => {
  const handleBackPress = () => {
    if (onBackPressed) {
      onBackPressed();
    } else {
      goBack();
    }
  };

  return (
    <View
      style={{
        ...Style.containerRow,
        gap: 10,
        paddingTop: 5,
        paddingBottom: 10,
      }}
    >
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Pressable
          style={{
            width: 42,
            height: 42,
            borderRadius: 100,
            borderWidth: 1,
            ...Style.containerCenter,
            borderColor: colors.lightBlue,
          }}
          onPress={handleBackPress}
        >
          <ChevronLeftSVG />
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
          top: 3,
        }}
      >
        {title}
      </Text>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        {rightComponent?.()}
      </View>
    </View>
  );
};

export default NavigationHeader;

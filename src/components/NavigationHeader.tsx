import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import Style from "../styles/Style";
import ChevronLeftSVG from "../assets/AppIcon/chevronLeft";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import { goBack } from "../navigation/NavigationService";
import CloseSVG from "../assets/AppIcon/close";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  title?: string;
  rightComponent?: () => ReactNode;
  onBackPressed?: () => void | undefined;
  isClose?: boolean;
}

const NavigationHeader: React.FC<Props> = ({
  onBackPressed,
  rightComponent,
  title,
  isClose,
}) => {
  const { theme } = useTheme();

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
            borderColor: theme.borderColor,
          }}
          onPress={handleBackPress}
        >
          {isClose ? (
            <CloseSVG color={theme.secondary} />
          ) : (
            <ChevronLeftSVG color={theme.secondary} />
          )}
        </Pressable>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: theme.secondary,
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

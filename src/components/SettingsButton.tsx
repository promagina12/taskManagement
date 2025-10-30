import { Text, Pressable } from "react-native";
import React from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import ChevronRightSVG from "../assets/AppIcon/chevronRight";
import { FONT_FAMILY } from "../styles/fonts";
import Switch from "./Switch";
import { useSharedValue } from "react-native-reanimated";
import Checkbox from "./Checkbox";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  title: string;
  onPress?: () => void;
  type?: string;
  checkBoxValue?: boolean;
}

const SettingsButton = ({
  title,
  onPress,
  type = "default",
  checkBoxValue = false,
}: Props) => {
  const { theme } = useTheme();
  const isOn = useSharedValue(false);

  const handlePress = () => {
    isOn.value = !isOn.value;
  };

  const onPressSettings = () => {
    onPress?.();
    if (type === "switch") {
      handlePress();
    }
  };

  return (
    <Pressable
      style={{
        ...Style.containerSpaceBetween,
        paddingHorizontal: 20,
        height: 56,
        borderWidth: 1,
        borderRadius: 12,
        borderColor:
          type === "checkbox"
            ? checkBoxValue
              ? theme.primary
              : theme.borderColor
            : theme.borderColor,
      }}
      onPress={onPressSettings}
    >
      <Text
        style={{
          fontSize: 16,
          color: theme.secondary,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {title}
      </Text>
      {type === "default" ? (
        <ChevronRightSVG color={theme.secondary} />
      ) : type === "switch" ? (
        <Switch
          value={isOn}
          onPress={() => {
            handlePress();
            onPress?.();
          }}
          style={{ width: 35, height: 20 }}
          trackColors={{
            on: theme.primary,
            off: theme.tertiary,
          }}
        />
      ) : type === "checkbox" ? (
        <Checkbox onPress={onPressSettings} isChecked={checkBoxValue} />
      ) : null}
    </Pressable>
  );
};

export default SettingsButton;

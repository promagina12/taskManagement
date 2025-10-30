import { Text, Pressable } from "react-native";
import React from "react";
import Style from "../../styles/Style";
import { colors } from "../../styles/colors";
import { FONT_FAMILY } from "../../styles/fonts";
import { useTheme } from "../../providers/ThemeProvider";

interface Props {
  label?: string;
  icon?: React.ReactNode;
  action?: () => void;
}

const TaskButton = ({ label, icon, action }: Props) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={{
        borderWidth: 1,
        height: 56,
        paddingHorizontal: 20,
        borderRadius: 12,
        ...Style.containerRow,
        borderColor: theme.borderColor,
        gap: 12,
      }}
      onPress={action}
    >
      {icon}
      <Text
        style={{
          fontSize: 16,
          color: theme.secondary,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default TaskButton;

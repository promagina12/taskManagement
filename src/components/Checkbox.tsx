import { View, Pressable } from "react-native";
import React, { useState } from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  onPress?: () => void;
  isChecked: boolean;
}

const Checkbox = ({ onPress, isChecked }: Props) => {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={() => {
        onPress?.();
      }}
      style={{
        width: 20,
        height: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: isChecked ? theme.primary : colors.gray,
        ...Style.containerCenter,
      }}
    >
      {isChecked && (
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 100,
            backgroundColor: theme.primary,
          }}
        />
      )}
    </Pressable>
  );
};

export default Checkbox;

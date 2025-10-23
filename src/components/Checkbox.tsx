import { View, Pressable } from "react-native";
import React, { useState } from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";

interface Props {
  onPress?: () => void;
  isChecked: boolean;
}

const Checkbox = ({ onPress, isChecked }: Props) => {
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
        borderColor: isChecked ? colors.purple : colors.gray,
        ...Style.containerCenter,
      }}
    >
      {isChecked && (
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 100,
            backgroundColor: colors.purple,
          }}
        />
      )}
    </Pressable>
  );
};

export default Checkbox;

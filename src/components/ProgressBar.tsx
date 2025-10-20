import { View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

interface Props {
  selected?: boolean;
  bgColor?: string;
  color?: string;
  progress?: number;
  height?: number;
}

const ProgressBar: React.FC<Props> = ({
  selected,
  bgColor,
  color,
  progress = 60,
  height = 5,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height,
        borderRadius: 100,
        backgroundColor: bgColor ?? "transparent",
      }}
    >
      <View
        style={{
          width: `${progress ?? 0}%`,
          height: "100%",
          borderRadius: 100,
          backgroundColor: color ?? (selected ? colors.white : colors.purple),
        }}
      />
    </View>
  );
};

export default ProgressBar;

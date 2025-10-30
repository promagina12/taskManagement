import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import Style from "../styles/Style";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  label?: string;
  data?: string[];
  selected?: string | null;
  onPress?: (e: string) => void;
}

const Badges = ({ data, label, onPress, selected }: Props) => {
  const { theme } = useTheme();

  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.title}>{label}</Text>
      <View
        style={{
          ...Style.containerRow,
          gap: 16,
        }}
      >
        {data?.map((item, index) => (
          <Pressable
            key={index}
            style={{
              ...styles.button,
              borderColor:
                selected === item ? theme.primary : theme.borderColor,
            }}
            onPress={() => onPress?.(item)}
          >
            <Text
              style={{
                ...styles.textStyle,
                color: selected === item ? theme.secondary : colors.gray2,
              }}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  button: {
    ...Style.containerCenter,
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
});

import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { FONT_FAMILY } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";

interface Props {
  label: string;
  onPress: () => void;
  selected: boolean;
}

const FilterButton = ({ label, onPress, selected }: Props) => {
  return (
    <Pressable
      style={{
        ...styles.filterContainer,
        borderColor: selected ? colors.purple : "transparent",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.filter,
          color: selected ? colors.darkBlue : colors.gray2,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterContainer: {
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  filter: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
});

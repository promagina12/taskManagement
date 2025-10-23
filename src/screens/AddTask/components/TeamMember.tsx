import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import { placeholder } from "../../../assets";
import Style from "../../../styles/Style";
import AddSVG from "../../../assets/AppIcon/add";

const TeamMember = () => {
  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.name}>Team Member</Text>
      <View
        style={{
          ...Style.containerRow,
          gap: 10,
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <View
            key={index}
            style={{
              gap: 6,
              ...Style.containerCenter,
            }}
          >
            <Image source={placeholder.avatar} style={styles.avatar} />
            <Text style={styles.name}>John</Text>
          </View>
        ))}
        <View
          style={{
            gap: 6,
          }}
        >
          <Pressable style={styles.addButton}>
            <AddSVG size={24} color={colors.purple} />
          </Pressable>
          <Text
            style={{
              ...styles.name,
              color: colors.white,
            }}
          >
            Add
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeamMember;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    ...Style.containerCenter,
    borderColor: colors.purple,
  },
});

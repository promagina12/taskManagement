import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { placeholder } from "../../../assets";
import CameraSVG from "../../../assets/AppIcon/camera";
import Style from "../../../styles/Style";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";

const ChatCard = () => {
  return (
    <View
      style={{
        ...Style.containerSpaceBetween,
      }}
    >
      <View
        style={{
          ...Style.containerRow,
          gap: 16,
        }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={placeholder.avatar}
            style={{ width: 48, height: 48, borderRadius: 100 }}
          />
          <View style={styles.badge} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: colors.darkBlue,
              fontFamily: FONT_FAMILY.poppinsMedium,
            }}
          >
            Jenny Alxinder
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: colors.gray2,
              fontFamily: FONT_FAMILY.poppinsRegular,
            }}
          >
            Active now
          </Text>
        </View>
      </View>
      <Pressable>
        <CameraSVG />
      </Pressable>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  badge: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#45F056",
    position: "absolute",
    bottom: 3,
    right: 1,
    borderWidth: 1,
    borderColor: colors.white,
  },
});

import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import CameraSVG from "../../../assets/AppIcon/camera";
import Style from "../../../styles/Style";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import ProfileSVG from "../../../assets/AppIcon/profile";

interface Props {
  name?: string;
  image?: string | null;
  onPress?: () => void;
}

const ChatCard: React.FC<Props> = ({ name, image, onPress }) => {
  return (
    <Pressable
      style={{
        ...Style.containerSpaceBetween,
      }}
      onPress={onPress}
    >
      <View
        style={{
          ...Style.containerRow,
          gap: 16,
        }}
      >
        <View style={{ position: "relative" }}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 48, height: 48, borderRadius: 100 }}
            />
          ) : (
            <View style={styles.emptyProfile}>
              <ProfileSVG size={40} color={colors.darkBlue} />
            </View>
          )}
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
            {name}
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
    </Pressable>
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
  emptyProfile: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { placeholder } from "../../../assets";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import ProgressBar from "../../../components/ProgressBar";
import Style from "../../../styles/Style";
import { IUser } from "../../../interface/users";
import ProfileSVG from "../../../assets/AppIcon/profile";
import { useTheme } from "../../../providers/ThemeProvider";

interface Props {
  selected: boolean;
  name?: string;
  onPress?: () => void;
  membersInfo?: IUser[];
}

const TeamCard: React.FC<Props> = ({
  selected,
  name,
  onPress,
  membersInfo,
}) => {
  const { theme, isDark } = useTheme();

  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: selected ? theme.primary : theme.background,
        borderColor: selected ? theme.primary : theme.borderColor,
      }}
      onPress={onPress}
    >
      {isDark ? (
        selected && (
          <Image source={placeholder.teamCardBG} style={styles.bgImg} />
        )
      ) : (
        <Image source={placeholder.teamCardBG} style={styles.bgImg} />
      )}
      <View style={{ gap: 4 }}>
        <Text
          style={{
            ...styles.title,
            color: selected
              ? colors.white
              : isDark
              ? colors.white
              : colors.darkBlue,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            ...styles.subtitle,
            color: selected ? "#C5DAFD" : "#A0BAC5",
          }}
        >
          UI Design Kit
        </Text>
      </View>
      <View style={{ ...Style.containerSpaceBetween }}>
        <View style={{ width: 82, height: 32 }}>
          {membersInfo?.slice(0, 3).map((item, index) => {
            return item.image ? (
              <Image
                key={index}
                source={{ uri: item.image }}
                style={{
                  ...styles.img,
                  left: index * 20,
                }}
              />
            ) : (
              <View
                key={index}
                style={{
                  ...styles.img,
                  left: index * 20,
                  borderColor: colors.white,
                  backgroundColor: selected ? theme.primary : theme.background,
                  ...Style.containerCenter,
                }}
              >
                <ProfileSVG
                  size={25}
                  color={selected ? colors.white : theme.secondary}
                />
              </View>
            );
          })}
        </View>
        <View style={{ gap: 8 }}>
          <View style={{ ...Style.containerRow, gap: 27 }}>
            <Text
              style={{
                ...styles.subtitle,
                color: selected ? "#C5DAFD" : "#A0BAC5",
              }}
            >
              Progress
            </Text>
            <Text
              style={{
                ...styles.progress,
                color: selected ? colors.white : theme.secondary,
              }}
            >
              50/80
            </Text>
          </View>
          <ProgressBar
            selected={selected}
            {...(isDark && { color: colors.white, bgColor: "#004CCD" })}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default TeamCard;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(60),
    height: 150,
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  title: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  progress: {
    fontSize: 12,
    color: colors.white,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.white,
    position: "absolute",
  },
});

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { placeholder } from "../../../assets";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";
import ProgressBar from "../../../components/ProgressBar";
import Style from "../../../styles/Style";

interface Props {
  selected: boolean;
}

const TeamCard: React.FC<Props> = ({ selected }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: selected ? colors.purple : colors.white,
        borderColor: selected ? colors.purple : "#EDF4FF",
      }}
    >
      <Image source={placeholder.teamCardBG} style={styles.bgImg} />
      <View style={{ gap: 4 }}>
        <Text
          style={{
            ...styles.title,
            color: selected ? colors.white : colors.darkBlue,
          }}
        >
          Application Design
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
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <Image
                key={index}
                source={placeholder.avatar}
                style={{
                  ...styles.img,
                  left: index * 20,
                }}
              />
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
                color: selected ? colors.white : colors.darkBlue,
              }}
            >
              50/80
            </Text>
          </View>
          <ProgressBar selected={selected} />
        </View>
      </View>
    </View>
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
    paddingVertical: 26,
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

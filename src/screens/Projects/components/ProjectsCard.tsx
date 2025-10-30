import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ProgressBar from "../../../components/ProgressBar";
import { colors } from "../../../styles/colors";
import Style from "../../../styles/Style";
import { FONT_FAMILY } from "../../../styles/fonts";
import { placeholder } from "../../../assets";
import { useTheme } from "../../../providers/ThemeProvider";

interface Props {
  title?: string;
}

const ProjectsCard: React.FC<Props> = ({ title }) => {
  const { theme, isDark } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        borderColor: theme.borderColor,
      }}
    >
      <View>
        <View style={Style.containerSpaceBetween}>
          <Text
            style={{
              ...styles.title,
              color: theme.secondary,
            }}
          >
            {title}
          </Text>
          <View style={styles.progressContainer}>
            <Text
              style={{
                ...styles.progress,
                color: theme.secondary,
              }}
            >
              10/20
            </Text>
          </View>
        </View>
        <Text style={styles.category}>Design</Text>
      </View>
      <View
        style={{
          ...Style.containerRow,
          gap: 6,
        }}
      >
        <View style={{ height: 32, width: 50 }}>
          {Array.from({ length: 2 }).map((_, index) => (
            <Image
              key={index}
              source={placeholder.avatar}
              style={{
                ...styles.img,
                left: index * 20,
              }}
            />
          ))}
        </View>
        <View style={{ flex: 1 }}>
          <ProgressBar
            bgColor={isDark ? "#212719" : "#ECF4E5"}
            color="#B0D97F"
            height={8}
          />
        </View>
      </View>
    </View>
  );
};

export default ProjectsCard;

const styles = StyleSheet.create({
  container: {
    gap: 7,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  progressContainer: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "#B0D97F",
    borderRadius: 100,
  },
  progress: {
    fontSize: 12,
    color: colors.darkBlue,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  category: {
    fontSize: 13,
    color: colors.gray2,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 100,
    position: "absolute",
  },
});

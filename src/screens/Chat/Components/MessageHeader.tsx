import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { FC } from "react";
import Style from "../../../styles/Style";
import ArrowLeftSVG from "../../../assets/AppIcon/arrowLeft";
import { goBack } from "../../../navigation/NavigationService";
import ThreeDotsHorizontalSVG from "../../../assets/AppIcon/threeDotsHorizontal";
import { FONT_FAMILY } from "../../../styles/fonts";
import { colors } from "../../../styles/colors";
import ProfileSVG from "../../../assets/AppIcon/profile";
import { useTheme } from "../../../providers/ThemeProvider";

interface Props {
  name?: string;
  image?: string | null;
}

const MessageHeader: FC<Props> = ({ image, name }) => {
  const { theme, isDark } = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 24,
        ...Style.containerSpaceBetween,
        gap: 20,
        paddingTop: 5,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          ...Style.containerRow,
          gap: 20,
        }}
      >
        <Pressable onPress={goBack}>
          <ArrowLeftSVG color={theme.secondary} />
        </Pressable>
        <View style={{ ...Style.containerRow, gap: 10 }}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 42, height: 42, borderRadius: 100 }}
            />
          ) : (
            <View
              style={{
                ...styles.emptyProfile,
                borderColor: theme.secondary,
              }}
            >
              <ProfileSVG size={30} color={theme.secondary} />
            </View>
          )}
          <Text
            style={{
              fontSize: 18,
              color: theme.secondary,
              fontFamily: FONT_FAMILY.poppinsMedium,
              top: 3,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
      <Pressable>
        <ThreeDotsHorizontalSVG color={theme.secondary} />
      </Pressable>
    </View>
  );
};

export default MessageHeader;

const styles = StyleSheet.create({
  emptyProfile: {
    width: 42,
    height: 42,
    borderWidth: 2,
    borderRadius: 100,
    ...Style.containerCenter,
    borderColor: colors.darkBlue,
  },
});

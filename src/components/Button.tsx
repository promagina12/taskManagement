import {
  Text,
  Pressable,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import { placeholder } from "../assets";
import DropShadow from "react-native-drop-shadow";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  linearShadow?: boolean;
  title?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<Props> = ({
  linearShadow = false,
  onPress,
  title,
  containerStyle,
}) => {
  const { theme, isDark } = useTheme();

  if (isDark) {
    return (
      <Pressable
        style={[
          {
            ...styles.buttonContainer,
            backgroundColor: theme.primary,
          },
          containerStyle,
        ]}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    );
  }

  if (!linearShadow) {
    return (
      <DropShadow style={styles.dropShadow}>
        <Pressable
          style={[styles.buttonContainer, containerStyle]}
          onPress={onPress}
        >
          <Text style={styles.title}>{title}</Text>
        </Pressable>
      </DropShadow>
    );
  }

  return (
    <Pressable
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      {linearShadow && (
        <Image source={placeholder.linerShadow} style={styles.linearShadow} />
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    ...Style.containerCenter,
    backgroundColor: colors.purple,
    height: 48,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
  linearShadow: {
    width: "110%",
    position: "absolute",
    bottom: -50,
    zIndex: -1,
  },
  dropShadow: {
    shadowColor: "#00000025",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});

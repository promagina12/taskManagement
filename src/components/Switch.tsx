import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "../styles/colors";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  value: SharedValue<boolean> | any;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  trackColors?: { on: string; off: string };
}

const Switch = ({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = { on: colors.purple, off: "#D7D7D7" },
}: Props) => {
  const { theme } = useTheme();

  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      value.value,
      [0, 1],
      [trackColors.off, trackColors.on]
    );
    const colorValue = withTiming(color, { duration });

    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(value.value),
      [0, 1],
      [0, width.value - height.value]
    );
    const translateValue = withTiming(moveValue, { duration });

    return {
      transform: [{ translateX: translateValue }],
      borderRadius: height.value / 2,
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[switchStyles.track, style, trackAnimatedStyle]}
      >
        <Animated.View
          style={[
            {
              ...switchStyles.thumb,
              backgroundColor: theme.background,
            },
            thumbAnimatedStyle,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default Switch;

const switchStyles = StyleSheet.create({
  track: {
    alignItems: "flex-start",
    width: 100,
    height: 40,
    padding: 3,
  },
  thumb: {
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
  },
});

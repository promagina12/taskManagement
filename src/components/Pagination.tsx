import { Pressable, View } from "react-native";
import React, { useEffect } from "react";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  selected?: number;
  page?: number;
  spacing?: number;
  selectedWidth?: number;
  size?: number;
  onPress?: (value: any) => void | undefined;
}

interface AnimatedProps {
  index: number;
  selected: number;
  size: number;
  selectedWidth: number;
  onPress?: (value: any) => void | undefined;
}

const AnimatedView: React.FC<AnimatedProps> = ({
  index,
  selected,
  selectedWidth,
  size,
  onPress,
}) => {
  const width = useSharedValue<number>(size);
  const selectedIndex = selected === index;

  useEffect(() => {
    if (selectedIndex) {
      width.value = withTiming(selectedWidth, {
        duration: 500,
        easing: Easing.ease,
      });
    } else {
      width.value = withTiming(size, { duration: 500, easing: Easing.ease });
    }
  }, [selectedIndex]);

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={{
          width,
          height: size,
          backgroundColor: selectedIndex ? colors.purple : colors.transBlue,
          borderRadius: 100,
        }}
      />
    </Pressable>
  );
};

const Pagination: React.FC<Props> = ({
  page = 3,
  selected = 0,
  spacing = 7,
  selectedWidth = 20,
  size = 8,
  onPress,
}) => {
  return (
    <View
      style={{
        ...Style.containerRow,
        gap: spacing,
      }}
    >
      {Array.from({ length: page }).map((_, index) => (
        <AnimatedView
          key={index}
          index={index}
          selected={selected}
          selectedWidth={selectedWidth}
          size={size}
          onPress={() => onPress?.(index)}
        />
      ))}
    </View>
  );
};

export default Pagination;

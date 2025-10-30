import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";
import GridSVG from "../assets/AppIcon/grid";
import BellSVG from "../assets/AppIcon/bell";
import Style from "../styles/Style";
import { FONT_FAMILY } from "../styles/fonts";
import { navigate } from "../navigation/NavigationService";
import { ROUTES } from "../navigation/Routes";
import { useTheme } from "../providers/ThemeProvider";

interface Props {
  title?: string;
  headerContainerStyle: StyleProp<ViewStyle>;
  onPressTitle?: () => void;
}

const BaseHeader: React.FC<Props> = ({
  title,
  headerContainerStyle,
  onPressTitle,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          ...Style.containerRow,
          gap: 10,
          paddingTop: 5,
          paddingBottom: 10,
        },
        headerContainerStyle,
      ]}
    >
      <View style={{ flex: 1 }}>
        <Pressable
          style={{
            width: 42,
            height: 42,
            borderRadius: 100,
            borderWidth: 1,
            ...Style.containerCenter,
            borderColor: theme.borderColor,
          }}
          onPress={() => navigate(ROUTES.ManageProfile)}
        >
          <GridSVG color={theme.secondary} />
        </Pressable>
      </View>
      <Pressable onPress={onPressTitle}>
        <Text
          style={{
            fontSize: 18,
            color: theme.secondary,
            fontFamily: FONT_FAMILY.poppinsMedium,
            top: 3,
          }}
        >
          {title}
        </Text>
      </Pressable>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Pressable
          style={{
            width: 42,
            height: 42,
            borderRadius: 100,
            borderWidth: 1,
            ...Style.containerCenter,
            borderColor: theme.borderColor,
          }}
        >
          <BellSVG color={theme.secondary} />
        </Pressable>
      </View>
    </View>
  );
};

export default BaseHeader;

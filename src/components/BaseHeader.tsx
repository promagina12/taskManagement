import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";
import GridSVG from "../assets/AppIcon/grid";
import BellSVG from "../assets/AppIcon/bell";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";
import { navigate } from "../navigation/NavigationService";
import { ROUTES } from "../navigation/Routes";

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
            borderColor: colors.lightBlue,
          }}
          onPress={() => navigate(ROUTES.ManageProfile)}
        >
          <GridSVG />
        </Pressable>
      </View>
      <Pressable onPress={onPressTitle}>
        <Text
          style={{
            fontSize: 18,
            color: colors.darkBlue,
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
            borderColor: colors.lightBlue,
          }}
        >
          <BellSVG />
        </Pressable>
      </View>
    </View>
  );
};

export default BaseHeader;

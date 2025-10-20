import { View, Text } from "react-native";
import React from "react";
import Style from "../../../styles/Style";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";

interface Props {
  icon?: React.ReactNode;
  count?: string;
  subtitle?: string;
}

const TaskContainer = ({ icon, count, subtitle }: Props) => {
  return (
    <View
      style={{
        ...Style.containerCenter,
        gap: 6,
        flex: 1,
      }}
    >
      {icon}
      <View style={Style.containerCenter}>
        <Text
          style={{
            fontSize: 22,
            color: colors.darkBlue,
            fontFamily: FONT_FAMILY.poppinsSemiBold,
          }}
        >
          {count}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: colors.gray2,
            fontFamily: FONT_FAMILY.poppinsRegular,
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default TaskContainer;

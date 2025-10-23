import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../../styles/colors";
import Style from "../../../styles/Style";
import { FONT_FAMILY } from "../../../styles/fonts";

interface Props {
  label?: string;
  value?: string | number;
}

const ManageCard = ({ label, value }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 16,
        borderColor: colors.lightBlue,
        ...Style.containerSpaceBetween,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {label}
      </Text>
      <View
        style={{
          width: 40,
          height: 28,
          ...Style.containerCenter,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: colors.lightBlue,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: colors.darkBlue,
            fontFamily: FONT_FAMILY.poppinsRegular,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export default ManageCard;

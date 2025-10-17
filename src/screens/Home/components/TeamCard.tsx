import { View, Text } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const TeamCard = () => {
  return (
    <View style={{ width: responsiveWidth(60), backgroundColor: "red" }}>
      <Text>TeamCard</Text>
    </View>
  );
};

export default TeamCard;

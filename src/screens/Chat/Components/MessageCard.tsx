import { View, Text } from "react-native";
import React, { FC } from "react";
import { IMessages } from "../../../interface/chat";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { colors } from "../../../styles/colors";
import { FONT_FAMILY } from "../../../styles/fonts";

interface Props {
  item?: IMessages;
  currentUID?: string | null;
}

const MessageCard: FC<Props> = ({ item, currentUID }) => {
  const currUser = item?.senderData?.id === currentUID;

  return (
    <View
      style={{
        alignSelf: currUser ? "flex-end" : "flex-start",
        backgroundColor: currUser ? colors.darkBlue : colors.lightBlue,
        maxWidth: responsiveWidth(60),
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: currUser ? colors.white : colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
        }}
      >
        {item?.content}
      </Text>
    </View>
  );
};

export default MessageCard;

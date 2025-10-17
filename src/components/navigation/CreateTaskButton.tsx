import { View, Text, Pressable } from "react-native";
import React from "react";
import AddSVG from "../../assets/AppIcon/add";
import { colors } from "../../styles/colors";
import Style from "../../styles/Style";
import DropShadow from "react-native-drop-shadow";

const CreateTaskButton = () => {
  return (
    <>
      <Pressable>
        <DropShadow
          style={{
            shadowColor: "#00000025",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: colors.purple,
              ...Style.containerCenter,
            }}
          >
            <AddSVG />
          </View>
        </DropShadow>
      </Pressable>
    </>
  );
};

export default CreateTaskButton;

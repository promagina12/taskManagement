import { View, TextInput, Text, StyleProp, ViewStyle } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/colors";
import Style from "../styles/Style";
import { FONT_FAMILY } from "../styles/fonts";

interface Props {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  type?: string;
  placeholder?: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  type = "default",
  onChangeText,
  value,
  placeholder,
  label,
  containerStyle,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View style={[{ gap: 10 }, containerStyle]}>
      {label && (
        <Text
          style={{
            fontSize: 14,
            color: colors.gray2,
            fontFamily: FONT_FAMILY.poppinsRegular,
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 16,
          borderColor: isFocus ? colors.purple : colors.lightBlue,
          ...Style.containerRow,
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          value={value}
          onChangeText={onChangeText}
          style={{
            fontSize: 16,
            color: colors.darkBlue,
            fontFamily: FONT_FAMILY.poppinsMedium,
            flex: 1,
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...(type === "password"
            ? {
                secureTextEntry: true,
              }
            : {})}
        />
      </View>
    </View>
  );
};

export default Input;

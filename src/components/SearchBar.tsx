import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import SearchSVG from "../assets/AppIcon/search";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";

interface Props {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ onChangeText, value, placeholder }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      style={{
        ...Style.containerRow,
        gap: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: isFocus ? colors.purple : colors.lightBlue,
        ...Style.containerRow,
        paddingVertical: 5,
      }}
    >
      <SearchSVG />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChangeText}
        style={{
          fontSize: 14,
          color: colors.darkBlue,
          fontFamily: FONT_FAMILY.poppinsMedium,
          flex: 1,
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </View>
  );
};

export default SearchBar;

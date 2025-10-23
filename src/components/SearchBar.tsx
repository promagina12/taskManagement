import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import SearchSVG from "../assets/AppIcon/search";
import Style from "../styles/Style";
import { colors } from "../styles/colors";
import { FONT_FAMILY } from "../styles/fonts";

interface Props {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
  onPress?: () => void;
}

const SearchBar: React.FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  onPress,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const Container = onPress ? Pressable : View;

  return (
    <Container
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
      onPress={onPress}
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
        editable={!onPress}
      />
    </Container>
  );
};

export default SearchBar;

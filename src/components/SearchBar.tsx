import { View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import SearchSVG from "../assets/AppIcon/search";
import Style from "../styles/Style";
import { FONT_FAMILY } from "../styles/fonts";
import { useTheme } from "../providers/ThemeProvider";

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
  const { theme } = useTheme();
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
        borderColor: isFocus ? theme.primary : theme.borderColor,
        ...Style.containerRow,
        paddingVertical: 5,
      }}
      onPress={onPress}
    >
      <SearchSVG />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.textColorSecondary}
        value={value}
        onChangeText={onChangeText}
        style={{
          fontSize: 14,
          color: theme.secondary,
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

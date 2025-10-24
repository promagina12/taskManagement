import {
  View,
  TextInput,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/colors";
import Style from "../styles/Style";
import { FONT_FAMILY } from "../styles/fonts";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface Props {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  type?: "default" | "password" | "date" | "time";
  placeholder?: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  dateValue?: Date;
  onDateChange?: (event: DateTimePickerEvent, date?: Date) => void;
}

const Input: React.FC<Props> = ({
  type = "default",
  onChangeText,
  value,
  dateValue,
  placeholder,
  label,
  containerStyle,
  onDateChange,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const Container = type === "date" || type === "time" ? Pressable : View;

  return (
    <>
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
        <Container
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: isFocus ? colors.purple : colors.lightBlue,
            ...Style.containerRow,
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}
          onPress={() => setShowDatePicker(true)}
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
            editable={type !== "date" && type !== "time"}
          />
        </Container>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={dateValue || new Date()}
          mode={type === "date" ? "date" : "time"}
          onChange={(event, date) => {
            onDateChange?.(event, date);
            setShowDatePicker(false);
          }}
        />
      )}
    </>
  );
};

export default Input;

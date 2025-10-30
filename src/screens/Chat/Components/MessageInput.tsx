import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
} from "react-native";
import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DropShadow from "react-native-drop-shadow";
import { colors } from "../../../styles/colors";
import PaperPlaneSVG from "../../../assets/AppIcon/paperPlane";
import Style from "../../../styles/Style";
import { FONT_FAMILY } from "../../../styles/fonts";
import { useTheme } from "../../../providers/ThemeProvider";

interface Props {
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  onPressSend?: () => void;
}

const MessageInput: FC<Props> = ({
  onLayout,
  value,
  onChangeText,
  onPressSend,
}) => {
  const { bottom } = useSafeAreaInsets();
  const { theme, isDark } = useTheme();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: theme.background,
        width: "100%",
      }}
      onLayout={onLayout}
    >
      <DropShadow style={styles.dropShadow}>
        <View
          style={{
            paddingBottom: bottom ?? 20,
            paddingTop: 10,
            backgroundColor: theme.background,
            paddingHorizontal: 24,
            ...Style.containerRow,
            gap: 10,
          }}
        >
          <TextInput
            placeholder="Message"
            placeholderTextColor={theme.textColorSecondary}
            style={{
              flex: 1,
              backgroundColor: isDark ? "#357fff39" : "#357fff10",
              borderRadius: 100,
              paddingHorizontal: 12,
              fontSize: 14,
              color: colors.darkBlue,
              fontFamily: FONT_FAMILY.poppinsMedium,
            }}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onPressSend}
          />
          <Pressable onPress={onPressSend}>
            <PaperPlaneSVG color={theme.secondary} />
          </Pressable>
        </View>
      </DropShadow>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: "#00000025",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});

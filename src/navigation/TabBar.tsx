import { View, Pressable } from "react-native";
import React from "react";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Style from "../styles/Style";
import CreateTaskButton from "../components/navigation/CreateTaskButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { navigate } from "./NavigationService";
import { colors } from "../styles/colors";
import { useTheme } from "../providers/ThemeProvider";

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors = {} }) => {
  const { bottom } = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 30,
        paddingTop: 16,
        paddingBottom: bottom + 16,
        ...Style.containerSpaceBetween,
        gap: 10,
        backgroundColor: theme.background,
      }}
    >
      {state?.routes?.map((route, idx) => {
        const navKey = state.routes[idx].key;
        const options = descriptors[navKey]?.options; // guard descriptor access
        const isFocused = state?.index === idx;

        const TabIcon = options?.tabBarIcon;
        if (route.name === "Create") {
          return <CreateTaskButton key={idx} />;
        }

        return (
          <Pressable
            key={idx}
            style={{
              ...Style.containerCenter,
              width: 30,
              height: 30,
            }}
            onPress={() => {
              if (!isFocused) {
                navigate(route.name);
              }
            }}
          >
            {TabIcon
              ? TabIcon({
                  focused: isFocused,
                  color: "",
                  size: 0,
                })
              : null}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

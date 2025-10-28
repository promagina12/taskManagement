import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/NavigationService";
import MainStack from "./src/navigation/MainStack";
import UserDataProvider from "./src/providers/UserDataProvider";
import TaskDataProvider from "./src/providers/TaskDataProvider";
import Toast from "react-native-toast-message";
import TeamDataProvider from "./src/providers/TeamDataProvider";
import SharedProviders from "./src/providers/SharedProviders";

export default function App() {
  const [loaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsMedium: Poppins_500Medium,
    poppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SharedProviders>
          <NavigationContainer ref={navigationRef}>
            <MainStack />
          </NavigationContainer>
        </SharedProviders>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}

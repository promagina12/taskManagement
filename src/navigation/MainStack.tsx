import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./Routes";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.Onboarding} component={Onboarding} />
      <Stack.Screen name={ROUTES.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;

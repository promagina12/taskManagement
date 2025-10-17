import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./Routes";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import BottomStackNavigation from "./BottomStackNavigation";

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
      <Stack.Screen name={ROUTES.Register} component={Register} />
      <Stack.Screen
        name={ROUTES.BottomStack}
        component={BottomStackNavigation}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

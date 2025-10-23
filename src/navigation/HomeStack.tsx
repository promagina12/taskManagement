import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./Routes";
import Home from "../screens/Home/Home";
import TaskStatus from "../screens/TaskStatus/TaskStatus";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.Home} component={Home} />
      <Stack.Screen name={ROUTES.TaskStatus} component={TaskStatus} />
    </Stack.Navigator>
  );
};

export default HomeStack;

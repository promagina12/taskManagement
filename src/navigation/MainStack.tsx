import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./Routes";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import BottomStackNavigation from "./BottomStackNavigation";
import AddTask from "../screens/AddTask/AddTask";
import CreateTeam from "../screens/CreateTeam/CreateTeam";
import ManageProfile from "../screens/ManageProfile/ManageProfile";
import Search from "../screens/Search/Search";
import Settings from "../screens/Settings/Settings";
import EditProfile from "../screens/Profile/EditProfile";
import Langauge from "../screens/Settings/Langauge";
import Calendar from "../screens/Calendar/Calendar";
import { RootStackParamList } from "../interface/stack";
import Messages from "../screens/Chat/Messages";
import CreateChat from "../screens/Chat/CreateChat";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name={ROUTES.AddTask} component={AddTask} />
      <Stack.Screen name={ROUTES.CreateTeam} component={CreateTeam} />
      <Stack.Screen name={ROUTES.ManageProfile} component={ManageProfile} />
      <Stack.Screen name={ROUTES.Search} component={Search} />
      <Stack.Screen name={ROUTES.Settings} component={Settings} />
      <Stack.Screen name={ROUTES.EditProfile} component={EditProfile} />
      <Stack.Screen name={ROUTES.Langauge} component={Langauge} />
      <Stack.Screen name={ROUTES.Calendar} component={Calendar} />
      <Stack.Screen name={ROUTES.Messages} component={Messages} />
      <Stack.Screen name={ROUTES.CreateChat} component={CreateChat} />
    </Stack.Navigator>
  );
};

export default MainStack;

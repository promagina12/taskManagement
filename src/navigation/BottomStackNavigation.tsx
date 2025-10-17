import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./Routes";
import Home from "../screens/Home/Home";
import Projects from "../screens/Projects/Projects";
import Chat from "../screens/Chat/Chat";
import Profile from "../screens/Profile/Profile";
import TabBar from "./TabBar";
import { Pressable, Text } from "react-native";
import HomeSVG from "../assets/AppIcon/home";
import HomeOutlineSVG from "../assets/AppIcon/homeOutline";
import ProjectsSVG from "../assets/AppIcon/projects";
import ProjectsOutlineSVG from "../assets/AppIcon/ProjectsOutline";
import ChatSVG from "../assets/AppIcon/Chat";
import ChatOutlineSVG from "../assets/AppIcon/ChatOutline";
import ProfileSVG from "../assets/AppIcon/profile";
import ProfileOutlineSVG from "../assets/AppIcon/profileOutline";
import CreateTaskButton from "../components/navigation/CreateTaskButton";

const BottomStack = createBottomTabNavigator();

const CreateTaskPlaceholder = () => {
  return null;
};

const BottomStackNavigation = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomStack.Screen
        name={ROUTES.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeSVG /> : <HomeOutlineSVG />,
        }}
      />
      <BottomStack.Screen
        name={ROUTES.Projects}
        component={Projects}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ProjectsSVG /> : <ProjectsOutlineSVG />,
        }}
      />
      <BottomStack.Screen
        name={ROUTES.Create}
        component={CreateTaskPlaceholder}
      />
      <BottomStack.Screen
        name={ROUTES.Chat}
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ChatSVG /> : <ChatOutlineSVG />,
        }}
      />
      <BottomStack.Screen
        name={ROUTES.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileSVG /> : <ProfileOutlineSVG />,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomStackNavigation;

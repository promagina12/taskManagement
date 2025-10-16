import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(route: any) {
  navigationRef.current?.dispatch(route);
}

export function reset(route: any) {
  navigationRef.current?.reset(route);
}

export function goBack() {
  navigationRef.current?.goBack();
}

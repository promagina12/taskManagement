import { NavigationRoute, ParamListBase } from "@react-navigation/native";

export const CreateRouteList = (
  routes: NavigationRoute<ParamListBase, string>[]
) => {
  const routeList = routes?.map((route, routeIndex) => {
    console.log("CreateRouteList: ", route);
    return {
      routeIndex,
      name: route.name,
      type: "screen",
      key: route.key,
    };
  });

  routeList.splice(2, 0, {
    routeIndex: -1,
    key: "Custom",
    name: "CreateTask",
    type: "button",
  });

  return routeList;
};

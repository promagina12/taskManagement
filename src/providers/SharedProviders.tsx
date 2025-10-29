import { View, Text } from "react-native";
import React, { ComponentType } from "react";
import TaskDataProvider from "./TaskDataProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserDataProvider from "./UserDataProvider";
import TeamDataProvider from "./TeamDataProvider";
import ChatDataProvider from "./ChatDataProvider";
import { SheetProvider } from "react-native-actions-sheet";

type ProviderProps = Record<string, unknown>;

type Provider = [ComponentType<any>, ProviderProps?];

interface Props {
  children: React.ReactNode;
}

const SharedProviders: React.FC<Props> = ({ children }) => {
  const providers: Provider[] = [
    [SafeAreaProvider, {}],
    [UserDataProvider, {}],
    [TaskDataProvider, {}],
    [TeamDataProvider, {}],
    [ChatDataProvider, {}],
    [SheetProvider, {}],
  ];

  const Combined = providers.reduceRight(
    (AccumulatedChildren, [Provider, props]) => {
      return ({ children }: Props) => (
        <Provider {...props}>
          <AccumulatedChildren>{children}</AccumulatedChildren>
        </Provider>
      );
    },
    ({ children }) => <>{children}</>
  );

  return <Combined>{children}</Combined>;
};

export default SharedProviders;

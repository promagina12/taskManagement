import { View, Text, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../styles/colors";
import BaseHeader from "../components/BaseHeader";
import NavigationHeader from "../components/NavigationHeader";

interface Props {
  scrollEnabled?: boolean;
  title?: string;
  children?: ReactNode | undefined;
  onBackPressed?: () => void | undefined;
  headerType?: string;
  rightComponent?: ReactNode | undefined;
}

const Page: React.FC<Props> = ({
  children,
  headerType = "BASE",
  onBackPressed,
  rightComponent,
  scrollEnabled,
  title,
}) => {
  const PageContainer = scrollEnabled ? ScrollView : SafeAreaView;

  return (
    <PageContainer
      style={{ flex: 1 }}
      {...(scrollEnabled
        ? {
            contentContainerStyle: {
              paddingHorizontal: 24,
              backgroundColor: colors.white,
              flexGrow: 1,
            },
          }
        : {
            style: {
              paddingHorizontal: 24,
              backgroundColor: colors.white,
              flex: 1,
            },
          })}
    >
      {headerType === "BASE" ? (
        <BaseHeader />
      ) : headerType === "NONE" ? null : (
        <NavigationHeader
          title={title}
          onBackPressed={onBackPressed}
          rightComponent={rightComponent}
        />
      )}
      {children}
    </PageContainer>
  );
};

export default Page;

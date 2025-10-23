import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
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
  rightComponent?: () => ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  bottomComponent?: () => ReactNode;
  onPressTitle?: () => void;
}

const Page: React.FC<Props> = ({
  children,
  headerType = "BASE",
  onBackPressed,
  rightComponent,
  scrollEnabled,
  title,
  containerStyle,
  headerStyle,
  bottomComponent,
  onPressTitle,
}) => {
  const PageContainer = scrollEnabled ? ScrollView : View;

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 24,
        },
        containerStyle,
      ]}
    >
      {headerType === "BASE" ? (
        <BaseHeader
          title={title}
          headerContainerStyle={headerStyle}
          onPressTitle={onPressTitle}
        />
      ) : headerType === "NONE" ? null : (
        <NavigationHeader
          title={title}
          onBackPressed={onBackPressed}
          rightComponent={rightComponent}
          isClose={headerType === "CLOSE"}
        />
      )}
      <PageContainer
        {...(scrollEnabled
          ? {
              contentContainerStyle: {
                flexGrow: 1,
              },
            }
          : {
              style: {
                flex: 1,
              },
            })}
      >
        {children}
      </PageContainer>
      {bottomComponent?.()}
    </SafeAreaView>
  );
};

export default Page;

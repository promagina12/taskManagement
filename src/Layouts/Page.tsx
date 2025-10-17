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
  rightComponent?: ReactNode | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
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
        <BaseHeader title={title} headerContainerStyle={headerStyle} />
      ) : headerType === "NONE" ? null : (
        <NavigationHeader
          title={title}
          onBackPressed={onBackPressed}
          rightComponent={rightComponent}
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
    </SafeAreaView>
  );
};

export default Page;

import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import MainHeader from "../../components/MainHeader";
import { MainHeaderProps } from "../../components/MainHeader/types";
import styles from "./styles";
import { ScreenLayoutProps } from "./types";

const ScreenLayout: React.FC<Partial<ScreenLayoutProps & MainHeaderProps>> = ({
  scrollable,
  children,
  showHeader,
  title,
  headerRight,
  showShadow,
  footer,
  flexibleHeader,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {showHeader && (
        <MainHeader
          showShadow={showShadow}
          title={String(title)}
          headerRight={headerRight}
          flexibleHeader={flexibleHeader}
        />
      )}
      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
      {footer}
    </SafeAreaView>
  );
};

export default ScreenLayout;

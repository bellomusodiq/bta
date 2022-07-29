import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import MainHeader from "../../components/MainHeader";
import { MainHeaderProps } from "../../components/MainHeader/types";
import styles from "./styles";
import { ScreenLayoutProps } from "./types";

const ScreenLayout: React.FC<ScreenLayoutProps & MainHeaderProps> = ({
  scrollable,
  children,
  showHeader,
  ...headerProps
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showHeader && <MainHeader {...headerProps} />}
      {scrollable ? (
        <ScrollView style={styles.container}>{children}</ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenLayout;

import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { ScreenLayoutProps } from "./types";

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  scrollable,
  children,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      {scrollable ? (
        <ScrollView style={styles.container}>{children}</ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenLayout;

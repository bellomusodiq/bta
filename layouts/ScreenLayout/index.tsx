import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import MainHeader from "../../components/MainHeader";
import { MainHeaderProps } from "../../components/MainHeader/types";
import { height, width } from "../../consts/dimenentions";
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
  removeSafeArea,
  canRefresh,
  refreshing,
  onRefresh,
  SafeAreaBackground,
  noPadding
}) => {
  const inset = useSafeAreaInsets();
  const childComponent = (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={height(0.02)}
      >
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
            style={[styles.container, {paddingHorizontal: noPadding ? width(0) : width(0.05)}]}
            refreshControl={
              canRefresh ? (
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              ) : null
            }
          >
            {children}
          </ScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </KeyboardAvoidingView>
      {footer}
    </>
  );
  return !removeSafeArea ? (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: SafeAreaBackground || "white" }}
    >
      {childComponent}
    </SafeAreaView>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: inset.top,
      }}
    >
      {childComponent}
    </View>
  );
};

export default ScreenLayout;

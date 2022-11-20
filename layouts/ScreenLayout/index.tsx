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
import { LinearGradient } from "expo-linear-gradient";

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
  noPadding,
  onBackClick,
}) => {
  const inset = useSafeAreaInsets();
  const childComponent = (
    <View style={{ zIndex: 3, flex: 1, backgroundColor: "white" }}>
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
            removeHeaderColor={SafeAreaBackground === "white"}
            onBackClick={onBackClick}
          />
        )}
        {scrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
              styles.container,
              {
                paddingHorizontal: noPadding ? width(0) : width(0.05),
                // backgroundColor: SafeAreaBackground ? SafeAreaBackground : null,
              },
            ]}
            contentContainerStyle={{ backgroundColor: "white" }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                style={{
                  backgroundColor: SafeAreaBackground,
                }}
              />
            }
          >
            {children}
          </ScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </KeyboardAvoidingView>
      {footer}
    </View>
  );
  return !removeSafeArea ? (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: SafeAreaBackground || "#3861FB",
        position: "relative",
        // zIndex: 2,
      }}
    >
      {childComponent}
      <View
        style={{
          position: "absolute",
          height: height(0.5),
          backgroundColor: "white",
          bottom: 0,
          width: width(1),
          left: 0,
        }}
      />
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
      <View
        style={{
          position: "absolute",
          height: height(0.5),
          backgroundColor: "white",
          bottom: 0,
          width: width(1),
          left: 0,
        }}
      />
    </View>
  );
};

export default ScreenLayout;

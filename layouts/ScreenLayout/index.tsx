import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import MainHeader from "../../components/MainHeader";
import { MainHeaderProps } from "../../components/MainHeader/types";
import { height } from "../../consts/dimenentions";
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
            style={styles.container}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={styles.container}>{children}</View>
        )}
      </KeyboardAvoidingView>
      {footer}
    </SafeAreaView>
  );
};

export default ScreenLayout;

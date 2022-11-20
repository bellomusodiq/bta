import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import MainHeader from "../../components/MainHeader";
import styles from "../Overview/styles";

const WebViewScreen = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHeader title="" removeHeaderColor />
      <WebView source={{ uri: route.params.url }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;

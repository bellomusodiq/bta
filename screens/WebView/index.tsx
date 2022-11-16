import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;

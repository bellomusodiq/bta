import "react-native-gesture-handler";
import { Image, StatusBar, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { store } from "./store";
import { Provider } from "react-redux";
import Toast, { ErrorToast, SuccessToast } from "react-native-toast-message";
import { height, width } from "./consts/dimenentions";

const toastConfig = {
  success: (props) => (
    <SuccessToast {...props} text1NumberOfLines={20} text2NumberOfLines={20} />
  ),
  error: (props) => (
    <ErrorToast {...props} text1NumberOfLines={20} text2NumberOfLines={20} />
  ),
  autoHide: true,
  visibilityTime: 7000,
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require("./assets/fonts/Degular.ttf"),
    Inter_700Bold: require("./assets/fonts/DegularBold.otf"),
    Inter_500Medium: require("./assets/fonts/DegularMedium.ttf"),
    Inter_600SemiBold: require("./assets/fonts/DegularSemibold.otf"),
  });

  if (!fontsLoaded || !isLoadingComplete) {
    return (
      <Image
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: height(1),
          width: width(1),
        }}
        source={require("./assets/images/splash.png")}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation />
        <Toast config={toastConfig} />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>
    </Provider>
  );
}

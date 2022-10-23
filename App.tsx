import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";

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
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast {...props} text1NumberOfLines={3} text2NumberOfLines={3} />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
      text2NumberOfLines={3}
    />
  ),
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation colorScheme={colorScheme} />
          <Toast config={toastConfig} />
          <StatusBar backgroundColor="white" barStyle="dark-content" />
        </View>
      </Provider>
    );
  }
}

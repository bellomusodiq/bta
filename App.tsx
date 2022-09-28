import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
      <View style={{ flex: 1 }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
      </View>
    );
  }
}

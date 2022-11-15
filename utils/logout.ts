import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { logoutApi } from "../api/auth.api";

export const logoutHandler = async (navigation) => {
  await logoutApi();
  await AsyncStorage.removeItem("@user");
  await AsyncStorage.removeItem("@firstLogin");
  navigation.dispatch(StackActions.popToTop(

  ));
};

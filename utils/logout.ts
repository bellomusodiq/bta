import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";

export const logoutHandler = async (navigation) => {
  await AsyncStorage.removeItem("@user");
  navigation.dispatch(StackActions.popToTop());
};

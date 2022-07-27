import { Dimensions } from "react-native";

export const width = (fraction: number) => {
  return Dimensions.get("window").width * fraction;
};

export const height = (fraction: number) => {
  return Dimensions.get("window").height * fraction;
};

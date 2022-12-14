import { StyleSheet } from "react-native";
import { height, width } from "../consts/dimenentions";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3861FB",
    position: "absolute",
    left: 0,
    right: 0,
    width: width(1),
    height: height(1),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

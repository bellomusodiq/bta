import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height(0.015),
  },
  welcomeText: {
    fontSize: RFValue(20),
    color: "#333333",
  },
  grayText: {
    color: "#979797",
  },
});

export default styles;

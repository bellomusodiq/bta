import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: height(0.035),
  },
  welcomeText: {
    fontSize: RFValue(19),
    lineHeight: RFValue(24),
    fontWeight: "600",
    color: "#333333",
    fontFamily: "Inter_600SemiBold"
  },
  grayText: {
    color: "#979797",
  },
});

export default styles;

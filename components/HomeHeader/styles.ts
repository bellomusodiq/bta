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
    fontFamily: "Inter_600SemiBold",
  },
  grayText: {
    color: "#979797",
  },
  notificationContainer: {
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "black",
    width: 17,
    height: 17,
    backgroundColor: "#A6B9FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  indicatorText: {
    fontSize: 12,
    color: "white",
  },
});

export default styles;

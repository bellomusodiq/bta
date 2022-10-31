import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    paddingBottom: RFValue(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    width: "5%",
  },
  right: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    width: "85%",
  },
  centerText: {
    textAlign: "center",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_700Bold",
  },
  cross: {
    fontSize: RFValue(20),
    alignSelf: "center",
  },
});

export default styles;

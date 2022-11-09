import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: RFValue(8),
    marginTop: RFValue(15),
  },
  textContainer: {},
  title: {
    color: "white",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    fontFamily: "Inter_500Medium",
  },
  balance: {
    color: "white",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    fontFamily: "Inter_700Bold",
  },
  eyeIcon: {
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 45,
    borderColor: "white",
  },
});

export default styles;

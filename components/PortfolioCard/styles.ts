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
    fontSize: 14,
    lineHeight: RFValue(24),
    fontFamily: "Inter_500Medium",
  },
  balance: {
    color: "white",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    fontFamily: "Inter_600SemiBold",
  },
  eyeIcon: {
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderColor: "white",
    marginTop: 25,
  },
});

export default styles;

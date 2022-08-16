import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F4FF",
    padding: RFValue(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderRadius: RFValue(8),
    marginTop: RFValue(23),
  },
  textContainer: {},
  title: {
    color: "black",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  balance: {
    color: "black",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    fontFamily: "Inter_700Bold",
    marginTop: RFValue(8),
  },
  eyeIcon: {
    height: "40%",
    marginTop: RFValue(20),
  },
});

export default styles;

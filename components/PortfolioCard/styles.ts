import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F4FF",
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderRadius: RFValue(8),
    marginTop: RFValue(23),
  },
  textContainer: {},
  title: {
    color: "black",
    fontSize: RFValue(15),
    lineHeight: RFValue(24),
    fontFamily: "Inter_500Medium"
  },
  balance: {
    color: "black",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    fontFamily: "Inter_700Bold",
    marginTop: RFValue(4),
  },
  eyeIcon: {
    height: "47%",
    marginTop: RFValue(16),
  },
});

export default styles;

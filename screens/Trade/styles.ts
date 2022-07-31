import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  header: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    marginTop: RFValue(15),
  },
  text: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
    marginTop: RFValue(10),
    marginBottom: RFValue(15),
  },
  tradeItems: {
    marginTop: RFValue(10),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
});

export default styles;

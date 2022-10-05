import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  header: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(24),
    lineHeight: RFValue(32),
    marginTop: RFValue(15),
  },
  text: {
    fontSize: RFValue(12),
    lineHeight: RFValue(22),
    color: "#979797",
    marginTop: RFValue(10),
    marginBottom: RFValue(12),
    fontFamily: "Inter_500Medium",
  },
  tradeItems: {
    marginTop: RFValue(10),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  loadingContainer: {
    flex: 1,
    height: height(0.9),
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
  },
});

export default styles;

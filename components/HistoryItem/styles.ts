import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(12),
    flexDirection: "row",
  },
  iconContainer: {
    padding: 14,
    backgroundColor: "#EFFCF6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    width: 48,
    height: 48,
  },
  mainContainer: {
    flex: 1,
    marginLeft: RFValue(16),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textContainer: {},
  title: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  usdAmount: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  dateContainer: {},
  tokenAmount: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    textAlign: "right",
  },
  date: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
    textAlign: "right",
  },
});

export default styles;

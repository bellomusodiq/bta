import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(12),
    flexDirection: "row",
  },
  iconContainer: {
    padding: 14,
    backgroundColor: "#F1F4FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  mainContainer: {
    flex: 1,
    marginLeft: RFValue(16),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textContainer: {},
  title: {
    fontSize: RFValue(15),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
  },
  usdAmount: {
    fontSize: RFValue(12),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  dateContainer: {},
  tokenAmount: {
    fontSize: RFValue(15),
    lineHeight: RFValue(24),
    textAlign: "right",
  },
  date: {
    fontSize: RFValue(12),
    lineHeight: RFValue(24),
    color: "#979797",
    textAlign: "right",
  },
});

export default styles;

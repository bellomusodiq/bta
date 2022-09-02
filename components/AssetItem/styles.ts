import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(25),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: RFValue(10),
  },
  titleContainer: {
    alignItems: "stretch",
  },
  title: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    color: "#333333",
  },
  underline: {
    height: 2,
    backgroundColor: "#333333",
    marginTop: RFValue(2),
  },
  assetItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: RFValue(18),
    paddingTop: RFValue(18),
  },
  assetImage: {
    width: "10%",
    height: RFValue(40),
    marginRight: 5,
  },
  nameContainer: {
    width: "50%",
  },
  trendContainer: {
    width: "20%",
    alignSelf: "center",
  },
  valueContainer: {
    flex: 0.9,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#F0F0F0",
  },
  assetTitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
    fontFamily: "Inter_600SemiBold",
    marginBottom: 8,
  },
  assetAbbr: {
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
    color: "#979797",
  },
  amount: {
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
    textAlign: "right",
    fontFamily: "Inter_600SemiBold",
    marginBottom: 8,
  },
  amountValue: {
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
    color: "#979797",
    textAlign: "right",
  },
  arrowContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default styles;

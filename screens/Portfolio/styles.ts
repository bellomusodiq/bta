import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    marginRight: 10,
  },
  holdings: {
    textAlign: "center",
    marginTop: 30,
    fontSize: RFValue(14),
    lineHeight: RFValue(18),
    color: "#979797",
    marginBottom: 16,
  },
  holdingAsset: {
    textAlign: "center",
    fontSize: RFValue(14),
    lineHeight: RFValue(18),
    color: "#979797",
    marginBottom: 30,
  },
  amount1: {
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(32),
    marginBottom: 16,
  },
  growthContainer: {
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 72,
  },
  growth: {
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    color: "#25D366",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    paddingHorizontal: width(0.05),
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    color: "#3861FB",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    marginLeft: 8,
  },
  dividerFull: {
    height: 1,
    backgroundColor: "#F0F0F0",
    width: width(1),
    marginLeft: -width(0.05),
  },
  assetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 34,
  },
  assetTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  assetText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    marginRight: 8,
  },
  assetCountContainer: {
    backgroundColor: "#3861FB",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  assetCount: {
    color: "white",
    fontSize: 14,
  },
  toggleTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleText: {
    marginLeft: 8,
    fontSize: 16,
  },
  searchInput: {
    marginTop: 24,
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
    width: "30%",
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
    fontFamily: "Inter_500Medium",
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

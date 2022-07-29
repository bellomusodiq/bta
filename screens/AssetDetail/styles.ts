import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  currentPriceContainer: {},
  currentPriceTitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
  },
  currentPrice: {
    fontSize: RFValue(30),
    lineHeight: RFValue(40),
    fontFamily: "Inter_600SemiBold",
  },
  coinBalanceContainer: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(24),
    marginTop: RFValue(24),
    borderRadius: RFValue(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalBalanceContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(24),
    marginTop: RFValue(10),
    borderRadius: RFValue(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinImage: {
    width: RFValue(45),
    height: RFValue(45),
  },
  titleContainer: {
    width: "30%",
  },
  coinTitle: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  coinAbbr: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  balanceAmount: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    textAlign: "right",
  },
  balanceCurrency: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
    textAlign: "right",
  },
  balanceContainer: {
    flex: 0.9,
  },
  buySellButton: {
    marginTop: RFValue(14),
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(16),
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(130),
  },
  buySellButtonText: {
    fontSize: RFValue(16),
  },
  aboutTitle: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    marginTop: RFValue(32),
    marginBottom: RFValue(16),
  },
  aboutDescription: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  websiteButton: {
    marginTop: RFValue(16),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(16),
    borderWidth: 1,
    borderColor: "#F0F0F0",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: RFValue(48),
  },
  websiteButtonText: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#3861FB",
    marginRight: RFValue(10),
  },
  modalContainer: {
    backgroundColor: "white",
    paddingBottom: height(0.05),
    minHeight: height(0.5),
    paddingTop: RFValue(24),
  },
  modal: {
    justifyContent: "flex-end",
    width: width(1),
    position: "absolute",
    left: -width(0.05),
    bottom: -height(0.05),
  },
  backDrop: {
    backgroundColor: "black",
    flex: 1,
  },
  indicator: {
    alignSelf: "center",
    width: RFValue(40),
    height: 3,
    backgroundColor: "black",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(30),
    paddingHorizontal: RFValue(15),
    paddingBottom: RFValue(30)
  },
  button: {
    borderWidth: 1,
    borderRadius: RFValue(45),
    padding: RFValue(12),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F0F0F0",
    width: "45%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(10),
    lineHeight: RFValue(18),
  },
});

export default styles;

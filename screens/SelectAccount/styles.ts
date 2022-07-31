import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  paymentContainer: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingVertical: RFValue(24),
    borderRadius: RFValue(16),
    marginTop: RFValue(32),
  },
  paymentTitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#6E6E6E",
    marginBottom: RFValue(16),
    paddingHorizontal: RFValue(24),
  },
  paymentTitle2: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#6E6E6E",
    marginBottom: RFValue(16),
    marginTop: RFValue(32),
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(24),
  },
  input: {
    color: "black",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    marginRight: 5,
  },
  currency: {
    color: "#3861FB",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  currencyContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F4FF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  iconContainer: {
    width: RFValue(42),
    height: RFValue(42),
    borderRadius: RFValue(42),
    backgroundColor: "#F1F4FF",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  footerButton: {
    backgroundColor: "#3861FB",
    marginVertical: RFValue(10),
    marginHorizontal: width(0.05),
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
  },
  usd: {
    color: "#979797",
    fontSize: RFValue(18),
    lineHeight: RFValue(24),
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFValue(32),
    marginBottom: RFValue(20),
  },
  divider: {
    width: width(0.06),
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  balance: {
    flex: 1,
    padding: RFValue(12),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(46),
  },
  balanceText: {
    fontSize: RFValue(14),
    fontFamily: "Inter_600SemiBold",
  },
  balanceTitle: {
    color: "#979797",
  },
  percentageContainer: {
    paddingHorizontal: RFValue(24),
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  percentage: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(46),
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  percentageText: {
    fontSize: 12,
    color: "#979797",
  },
  itemContainer: {
    marginBottom: RFValue(15),
  },
});

export default styles;

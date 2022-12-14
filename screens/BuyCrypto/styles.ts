import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  paymentContainer: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    padding: RFValue(24),
    borderRadius: RFValue(16),
    marginTop: RFValue(32),
  },
  paymentTitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#6E6E6E",
    marginBottom: RFValue(16),
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
  },
  input: {
    color: "black",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    flex: 1,
  },
  currency: {
    color: "#979797",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
  },
  iconContainer: {
    width: RFValue(42),
    height: RFValue(42),
    borderRadius: RFValue(42),
    backgroundColor: "#3861FB",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0,

    elevation: 2,
  },
  footerButton: {
    marginVertical: RFValue(10),
    marginHorizontal: width(0.05),
    width: "90%",
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
});

export default styles;

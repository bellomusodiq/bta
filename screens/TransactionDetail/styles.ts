import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  transactionDetailItem: {
    paddingVertical: RFValue(12),
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
  },
  transactionDetailItemContainer: {
    width: "100%",
  },
  transactionDetailTitle: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  transactionDetailValue: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  copyButton: {
    marginRight: RFValue(10),
    marginLeft: RFValue(20),
    alignSelf: "center",
  },
  image: {
    width: RFValue(24),
    height: RFValue(24),
    marginTop: RFValue(32),
    marginBottom: RFValue(8),
  },
  amount: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    marginBottom: RFValue(18),
  },
  margin: {
    marginBottom: RFValue(32),
  },
  explorerButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: RFValue(16),
    borderWidth: 1,
    borderRadius: 130,
    borderColor: "#F0F0F0",
    marginBottom: RFValue(70),
    width: "100%",
  },
  explorerText: {
    color: "#3861FB",
    fontSize: RFValue(16),
  },
});

export default styles;

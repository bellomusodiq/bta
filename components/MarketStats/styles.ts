import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(32),
    marginBottom: RFValue(40),
  },
  title: {
    fontSize: RFValue(20),
    fontFamily: "Inter_600SemiBold",
    lineHeight: RFValue(24),
    marginBottom: RFValue(16),
  },
  marketStatsContainer: {
    borderWidth: 1,
    borderRadius: RFValue(16),
    borderColor: "#F0F0F0",
  },
  marketStatsItemContainer: {},
  marketStatsItem: {
    flexDirection: "row",
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(24),
    alignItems: "center",
  },
  iconContainer: {
    marginRight: RFValue(10),
  },
  marketStatsItemTitle: {
    fontSize: RFValue(16),
    color: "#979797",
    flex: 1,
  },
  amount: {
    textAlign: "right",
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(18),
  },
  urlContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  url: {
    color: "#3861FB",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginRight: RFValue(5),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    width: width(0.75),
    alignSelf: "center",
  },
});

export default styles;

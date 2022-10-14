import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
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
  marketStatsContainer: {
    borderWidth: 1,
    borderRadius: RFValue(16),
    borderColor: "#F0F0F0",
  },
  marketStatsItemTitle: {
    fontSize: RFValue(16),
    color: "#979797",
    flex: 1,
  },
  value: {
    // textAlign: "right",
    // fontFamily: "Inter_600SemiBold",
    // fontSize: RFValue(18),
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
    width: width(0.9) - RFValue(24),
    alignSelf: "flex-end",
  },
  tokenContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tokenImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  tokenTitle: {
    color: "#979797",
    fontSize: RFValue(16),
  },
  token: {
    fontSize: RFValue(16),
    marginLeft: 5,
  },
  fee: {
    fontSize: RFValue(16),
  },
  total: {
    fontSize: RFValue(20),
    fontFamily: "Inter_600SemiBold",
  },
  sendingText: {
    color: "#979797",
    textAlign: "center",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginTop: RFValue(24),
  },
  tokenText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    marginVertical: RFValue(16),
    textAlign: "center",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFValue(16),
  },
  timerText: {
    marginLeft: 10,
    fontSize: RFValue(14),
    color: "#979797",
  },
  note: {
    flexDirection: "row",
    marginVertical: RFValue(25),
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF9E9",
  },
  noteText: {
    marginLeft: 10,
    flex: 1,
    color: "#EBB101",
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

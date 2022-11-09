import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: RFValue(10),
  },
  titleContainer: {
    alignItems: "stretch",
  },
  title: {
    fontSize: RFValue(18),
    lineHeight: RFValue(24),
    color: "#333333",
    fontFamily: "Inter_500Medium",
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
    paddingBottom: RFValue(10),
    paddingTop: RFValue(5),
  },
  assetImage: {
    width: "10%",
    height: RFValue(40),
  },
  nameContainer: {
    width: "20%",
  },
  trendContainer: {
    width: "25%",
    alignSelf: "center",
  },
  valueContainer: {
    flex: 0.6,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#F0F0F0",
  },
  assetTitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
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
  },
  amountValue: {
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
    color: "#979797",
    textAlign: "right",
  },
  tab: {
    borderColor: "#EEEEEE",
    backgroundColor: "#FBFBFB",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    width: width(1),
    marginLeft: -width(0.05),
    marginBottom: 6,
    paddingTop: 5,
  },
  tabItem: {
    paddingTop: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    paddingBottom: 12,
    position: "relative",
  },
  tabItemText: {
    color: "#979797",
    fontSize: RFValue(16),
    fontFamily: "Inter_600SemiBold",
    marginLeft: 5,
  },
  tabDivider: {
    height: 2,
    backgroundColor: "#3861FB",
    borderRadius: 1,
    position: "absolute",
    marginTop: 10,
    marginBottom: -1,
    bottom: 0,
    width: "100%",
  },
  utilityContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "65%",
    height: 250,
    marginTop: 30,
  },
  utilityHeader: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  utilityText: {
    textAlign: "center",
    color: "#979797",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  comingSoon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#F0F0F0",
    width: "100%",
    marginBottom: 50,
  },
  comingSoonText: {
    fontSize: 16,
    color: "#979797",
  },
  tabContainer: {
    flexDirection: "row",
    position: "relative",
  },
  settings: {
    position: "absolute",
    right: 0,
    bottom: 20,
  },
});

export default styles;

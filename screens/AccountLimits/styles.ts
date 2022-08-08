import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    marginVertical: RFValue(16),
  },
  title: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(24),
  },
  card: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    backgroundColor: "#FBFBFB",
    borderRadius: 8,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: RFValue(16),
  },
  keyText: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  valueText: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  header: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#979797",
    marginTop: RFValue(40),
    marginBottom: RFValue(16),
  },
  limitContainer: {},
  limitTitle: { fontSize: RFValue(16), lineHeight: RFValue(24) },
  progress: {
    flexDirection: "row",
    height: 3,
    backgroundColor: "#A6B9FF",
    borderRadius: 3,
    marginTop: 16,
    marginBottom: 8,
  },
  completed: {
    backgroundColor: "#3861FB",
    borderRadius: 3,
  },
  limitTexts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalAmount: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  totalLeft: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  softBanHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  softBanTitle: {
    marginRight: RFValue(20),
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  softBanContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#F1F4FF",
  },
  softBanText: {
    color: "#3861FB",
    fontSize: RFValue(14),
    fontFamily: "Inter_700Bold",
  },
  softBanDescription: {
    color: "#979797",
    marginTop: RFValue(12),
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
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
});

export default styles;

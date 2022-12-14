import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#3861FB",
    width: width(1),
    marginLeft: -width(0.05),
    paddingBottom: 10,
    paddingHorizontal: 22,
  },
  tabContainer: {
    width: width(1),
    marginLeft: -width(0.05),
    paddingBottom: 10,
  },
  header: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(24),
    lineHeight: RFValue(32),
    marginTop: RFValue(18),
    color: "white",
  },
  text: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
    marginTop: RFValue(20),
    width: "50%",
    textAlign: "center",
  },
  tradeItems: {
    marginTop: RFValue(10),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  image: {
    height: 101,
    width: 147,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortButtonText: {
    marginLeft: 5,
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#3861FB",
  },
  modalContainer: {
    backgroundColor: "white",
    paddingBottom: height(0.08),
    minHeight: height(0.5),
    paddingTop: RFValue(12),
    borderTopLeftRadius: RFValue(18),
    borderTopRightRadius: RFValue(18),
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
  modalHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width(0.05),
  },
  modalHeader: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  modalHeaderButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalHeaderButtonText: {
    marginRight: 5,
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  modalDivider: {
    marginVertical: RFValue(15),
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: width(0.05),
  },
  statusTitle: {
    color: "#979797",
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
  },
  statusItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 120,
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 15,
    borderColor: "#F0F0F0",
  },
  statusItemText: {
    color: "black",
    fontSize: RFValue(12),
    lineHeight: RFValue(20),
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width(0.05),
  },
  dropdown: {
    flex: 0.7,
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 124,
  },
  modalFooter: {
    backgroundColor: "white",

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(0.05),
    paddingVertical: height(0.02),
    marginTop: height(0.04),
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 130,
    borderColor: "#3861FB",
    backgroundColor: "#3861FB",
  },
  footerButtonText: {
    color: "white",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: RFValue(50),
  },
  editButton: {
    position: "absolute",
    right: 0,
    top: RFValue(50),
  },
  profileImage: {
    width: RFValue(80),
    height: RFValue(80),
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: RFValue(32),
  },
  profileName: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    marginBottom: RFValue(8),
  },
  username: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(28),
    color: "#979797",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    width: width(1),
    marginLeft: -width(0.05),
    marginBottom: RFValue(24),
  },
  logoutButton: {
    width: "100%",
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(130),
    borderColor: "#F0F0F0",
    borderWidth: 1,
    marginTop: RFValue(20),
    marginBottom: RFValue(30),
  },
  logoutButtonText: {
    fontSize: RFValue(16),
    color: "#D71212",
  },
  bitafrika: {
    alignSelf: "center",
    width: "22%",
    marginBottom: RFValue(30),
  },
  note: {
    flexDirection: "row",
    marginBottom: RFValue(25),
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF9E9",
  },
  noteTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  noteText: {
    color: "#EBB101",
  },
  noteIconContainer: {
    marginTop: 10,
  },
  noteTextTitle: {
    color: "#EBB101",
    fontFamily: "Inter_700Bold",
    marginBottom: 5,
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
    alignSelf: "flex-end",
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 130,
    borderColor: "#FF5C5C",
    backgroundColor: "#FF5C5C",
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
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginVertical: 5,
    marginTop: 15,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    marginBottom: 8,
    marginTop: 10,
  },
  subTitle: {
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    color: "#979797",
  },
  divider: {
    width: width(1),
    left: 0,
    marginTop: 40,
    marginBottom: 30,
    marginLeft: -height(0.025),
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  input: {
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
  forgotPasswordText: {
    textAlign: "center",
    fontSize: RFValue(14),
    marginBottom: 16,
    color: "#3861FB",
  },
  createAccountText: {
    textAlign: "center",
    fontSize: RFValue(14),
    color: "#3861FB",
  },
  dropdown: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 124,
  },
  error: {
    textAlign: "center",
    alignSelf: "center",
    marginVertical: 10,
    color: "red",
    fontSize: 16,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: width(0.05),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 16,
    width: 21.33,
    marginRight: 4,
  },
  countryText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_600SemiBold",
    marginRight: 4,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingBottom: height(0.08),
    minHeight: height(0.5),
    paddingTop: RFValue(12),
    borderTopLeftRadius: RFValue(18),
    borderTopRightRadius: RFValue(18),
    paddingHorizontal: width(0.05),
  },
  modal: {
    justifyContent: "flex-end",
    width: width(1),
    position: "absolute",
    left: -width(0.05),
    bottom: -height(0.05),
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
    marginVertical: RFValue(17),
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countryItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_600SemiBold",
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
    paddingBottom: RFValue(30),
  },
  modalTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    lineHeight: 24,
    marginTop: 24,
  },
});

export default styles;

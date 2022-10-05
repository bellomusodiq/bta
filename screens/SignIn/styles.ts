import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    marginBottom: 8,
    marginTop: 40,
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
});

export default styles;

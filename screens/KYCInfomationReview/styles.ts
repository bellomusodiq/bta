import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginTop: RFValue(32),
    marginBottom: RFValue(24),
    color: "#979797",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "45%",
    height: 120,
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginTop: RFValue(24),
    marginBottom: RFValue(32),
  },
  inputContainer: {
    marginBottom: RFValue(24),
  },
  inputTitle: {
    color: "#979797",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  divider2: {
    marginBottom: RFValue(24),
    backgroundColor: "#F0F0F0",
    height: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderRadius: 138,
    marginBottom: RFValue(16),
  },
  editButton: {
    borderColor: "#F0F0F0",
  },
  submitButton: {
    borderColor: "#3861FB",
    backgroundColor: "#3861FB",
  },
  editText: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  submitText: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "white",
  },
});

export default styles;

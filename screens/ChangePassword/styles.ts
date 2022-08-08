import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  inputContainer: {
    // marginBottom: RFValue(24),
  },
  inputTitle: {
    color: "#CCCCCC",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginTop: RFValue(24),
    marginBottom: RFValue(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginTop: RFValue(24),
  },
  input: {
    fontSize: RFValue(16),
  },
  button: {
    marginTop: RFValue(32),
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 138,
  },
  buttonText: {
    color: "white",
    fontSize: RFValue(18),
  },
});

export default styles;

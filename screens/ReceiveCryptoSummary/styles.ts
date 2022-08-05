import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  input: {
    marginVertical: RFValue(24),
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: RFValue(32),
  },
  dropdown: {
    flex: 0.65,
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 124,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(15),
    backgroundColor: "red",
  },
  button: {
    borderWidth: 1,
    borderRadius: RFValue(45),
    padding: RFValue(16),
    // justifyContent: "center",
    alignItems: "center",
    borderColor: "#F0F0F0",
    width: width(0.4),
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
  },
  buttonText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(10),
    lineHeight: RFValue(24),
  },
  barcode: {
    alignSelf: "center",
    width: "80%",
    marginBottom: RFValue(22),
  },
  walletAddressTitle: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  walletAddress: {
    color: "#000",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  footerText: {
    marginTop: RFValue(50),
    textAlign: "center",
    fontSize: RFValue(14),
    color: "#979797",
    marginBottom: RFValue(50),
  },
  boldText: {
    color: "black",
  },
});

export default styles;

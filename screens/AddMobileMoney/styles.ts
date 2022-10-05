import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  inputContainer: {
    // marginBottom: RFValue(24),
  },
  inputTitle: {
    color: "#979797",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginTop: RFValue(24),
    marginBottom: RFValue(16),
  },
  inputTitle1: {
    color: "#979797",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginTop: RFValue(24),
    marginBottom: RFValue(8),
  },
  inputSubTitle: {
    color: "#CCCCCC",
    lineHeight: RFValue(24),
    marginBottom: RFValue(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    fontSize: RFValue(14),
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
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width(0.05),
  },
  dropdown: {
    // flex: 0.7,
    // marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 124,
    width: "100%",
  },
  countryDropdown: {
    // flex: 0.7,
    // marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderTopLeftRadius: 124,
    borderBottomLeftRadius: 124,
    // width: "100%",
  },
  image: {
    width: RFValue(20),
    height: RFValue(20),
    marginRight: RFValue(10),
  },
  countryImage: {
    width: RFValue(25),
    height: RFValue(16),
    marginRight: RFValue(10),
  },
  dropdownItem: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownItemText: {},
  countryDropdownContainer: {
    flexDirection: "row",
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderTopRightRadius: 124,
    borderBottomRightRadius: 124,
    fontSize: RFValue(16),
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
  margin: {
    marginBottom: 100,
  },
});

export default styles;

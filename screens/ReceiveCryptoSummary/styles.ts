import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

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
  dropdown: {
    // flex: 0.7,
    // marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 124,
    width: "65%",
  },
  dropdownContainerStyle: {
    backgroundColor: "#F0F0F0",
    marginTop: 5,
    padding: 10,
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
  dropdownItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  dropdownItemText: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: RFValue(14),
    color: "#3861FB",
  },
  rightText: {
    textAlign: "right",
    color: "#979797",
  },
  countryDropdownContainer: {
    flexDirection: "row",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(4),
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: RFValue(12),
    lineHeight: RFValue(16),
    color: "#3861FB",
  },
  searchCancel: {
    color: "#3861FB",
    fontSize: RFValue(12),
  },
  loadingContainer: {
    flex: 1,
    height: height(0.9),
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
  },
});

export default styles;

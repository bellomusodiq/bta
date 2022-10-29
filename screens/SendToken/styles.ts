import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    height: "100%",
  },
  barcode: {
    width: "100%",
    height: width(0.9),
    position: "absolute",
    left: 0,
    top: 0,
  },
  inputContainer: {
    marginTop: RFValue(20),
  },
  pasteText: {
    fontSize: RFValue(11),
    color: "#3861FB",
    fontFamily: "Inter_700Bold",
  },
  amountRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  tablet: {
    marginLeft: 10,
    backgroundColor: "#F1F4FF",
    paddingVertical: 4,
    borderRadius: 141,
    paddingHorizontal: 12,
  },
  tabletText: {
    color: "#3861FB",
    fontFamily: "Inter_700Bold",
    fontSize: RFValue(11.5),
  },
  availableText: {
    fontSize: RFValue(14),
    color: "#979797",
    marginTop: RFValue(15),
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
    marginVertical: RFValue(10),
    width: width(0.9),
    alignSelf: "center",
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
  maxText: {
    fontSize: RFValue(11),
  },
});

export default styles;

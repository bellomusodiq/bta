import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
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
    backgroundColor: "#3861FB",
    marginVertical: RFValue(10),
    marginHorizontal: width(0.05),
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

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0,

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
  flatList: {
    paddingTop: 15,
  },
});

export default styles;

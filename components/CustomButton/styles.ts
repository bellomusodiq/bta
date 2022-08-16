import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
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
    marginVertical: RFValue(16),
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
    width: "100%",
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
});

export default styles;

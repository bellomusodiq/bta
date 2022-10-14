import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  title: {
    marginTop: RFValue(32),
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    textAlign: "center",
  },
  token: {
    marginTop: RFValue(16),
    color: "#000",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    marginBottom: RFValue(24),
  },
  summaryItem: {
    borderWidth: 1,
    borderRadius: RFValue(16),
    borderColor: "#F0F0F0",
  },
  note: {
    flexDirection: "row",
    marginVertical: RFValue(25),
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFF9E9",
  },
  noteText: {
    marginLeft: 10,
    flex: 1,
    color: "#EBB101",
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
    width: width(0.9),
    padding: RFValue(14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(14),
  },
  buttonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    margin: 0,
    color: "#3861FB",
    marginRight: 5,
  },
});

export default styles;

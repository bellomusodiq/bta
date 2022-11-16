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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width(0.05),
  },
  title: {
    fontSize: RFValue(16),
    textAlign: "center",
    marginBottom: RFValue(10),
  },
  image: {
    width: "35%",
    marginBottom: RFValue(10),
    height: 100,
    zIndex: 2,
    // backgroundColor: "red",
  },
  text: {
    color: "#979797",
    fontSize: RFValue(14),
    textAlign: "center",
    marginBottom: RFValue(40),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#3861FB",
    fontSize: RFValue(14),
    fontFamily: "Inter_500Medium",
  },
});

export default styles;

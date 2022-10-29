import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: RFValue(20),
    fontFamily: "Inter_600SemiBold",
  },
  nameText: {
    color: "#3861FB",
    fontSize: RFValue(14),
  },
  email: {
    color: "#979797",
    fontSize: RFValue(14),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 40,
    marginBottom: 60,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: width(0.06)
  },
  pin: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
  },
  pinText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 30,
    marginTop: 4,
  },
  enterPin: {
    textAlign: "center",
    marginTop: 24,
    marginBottom: 40,
    color: "#979797",
    fontSize: RFValue(12),
  },
  errorPin: {
    textAlign: "center",
    marginTop: 24,
    marginBottom: 40,
    color: "red",
    fontSize: RFValue(12),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  button: {
    width: "20%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 32,
    fontFamily: "Inter_600SemiBold",
  },
  faceId: {
    width: 32,
    height: 32,
  },
  forgotPin: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 14,
    color: "#979797",
  },
  hilight: {
    color: "#3861FB",
  },
});

export default styles;

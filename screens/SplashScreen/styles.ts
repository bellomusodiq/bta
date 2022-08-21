import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "80%",
    height: height(0.3),
    marginBottom: RFValue(50),
  },
  title: {
    fontSize: RFValue(24),
    fontFamily: "Inter_600SemiBold",
    alignSelf: "flex-start",
    paddingHorizontal: RFValue(24),
  },
  hilight: {
    color: "#3861FB",
  },
  text: {
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    color: "#979797",
    marginTop: RFValue(8),
    alignSelf: "flex-start",
    paddingHorizontal: RFValue(24),
    marginBottom: RFValue(72),
  },
  button: {
    width: width(1) - 24 * 2,
    marginVertical: 0,
  },
  signIn: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    marginTop: RFValue(16),
  },
  buttonText: {
    color: "black",
  },
});

export default styles;

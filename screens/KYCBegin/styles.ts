import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  title: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(40),
    textAlign: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "80%",
    marginBottom: RFValue(64),
    height: RFValue(192),
    // backgroundColor: "red",
  },
  info: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    textAlign: "center",
    marginBottom: RFValue(16),
  },
  complete: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    textAlign: "center",
    marginBottom: RFValue(32),
    color: "#979797",
  },
});

export default styles;

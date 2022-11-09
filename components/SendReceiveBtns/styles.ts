import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(15),
  },
  buttonContainer: {
    alignItems: "center",
    width: "30%",
  },
  button: {
    borderRadius: RFValue(5),
    padding: RFValue(8.5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: RFValue(38),
    width: "100%",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(10),
    lineHeight: RFValue(24),
  },
  title: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    marginTop: 0,
    marginLeft: 5,
    color: "#3861FB",
  },
});

export default styles;

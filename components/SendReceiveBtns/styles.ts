import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(15),
    paddingHorizontal: RFValue(15),
  },
  button: {
    borderRadius: RFValue(45),
    padding: RFValue(12.5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: RFValue(47),
    height: RFValue(47),
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
    marginTop: 8,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(0.04),
    paddingVertical: RFValue(18),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: RFValue(14),
    color: "#979797",
    marginRight: 5
  },
  value: {
    fontSize: RFValue(14),
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  button: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(134),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;

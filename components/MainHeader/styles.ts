import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(10),
    backgroundColor: "white",
    paddingHorizontal: width(0.05),
  },
  headerLeft: {
    width: RFValue(28),
  },
  headerRight: {
    width: RFValue(28),
  },
  header: {
    flex: 1,
    marginHorizontal: RFValue(2),
    textAlign: "center",
    fontSize: RFValue(18),
  },
});

export default styles;

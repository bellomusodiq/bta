import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(15),
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
    fontFamily: "Inter_600SemiBold",
  },
  shadow: {
    height: 2,
    // borderBottomColor: "rgba(51, 51, 51, 0.05)",
    // borderBottomWidth: 3,
    shadowOffset: { width: 10, height: 18 },
    shadowRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    elevation: 8,
    // background color must be set
    backgroundColor: "#0000", // invisible color
  },
});

export default styles;

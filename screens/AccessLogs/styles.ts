import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  logItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logItem: {
    flex: 1,
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: RFValue(15),
    marginVertical: 2.5,
    maxWidth: "45%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: RFValue(20),
  },
  title: {
    width: RFValue(55),
    marginRight: RFValue(5),
    color: "#979797",
    fontSize: RFValue(16),
  },
  body: {
    flex: 1,
  },
});

export default styles;

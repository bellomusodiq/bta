import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: RFValue(15),
  },
  image: {
    width: RFValue(35),
    height: RFValue(35),
  },
  textContainer: {
    marginHorizontal: RFValue(10),
    flex: 1,
  },
  title: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
  },
  confirmations: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
});

export default styles;

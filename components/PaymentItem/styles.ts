import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(16),
  },
  iconContainer: {},
  textContainer: {
    flex: 1,
    marginHorizontal: RFValue(10),
  },
  title: {
    fontSize: RFValue(15),
    lineHeight: RFValue(20),
  },
  description: {
    color: "#979797",
    fontSize: RFValue(13),
    lineHeight: RFValue(20),
  },
  arrowContainer: {
    justifyContent: "center",
  },
});

export default styles;

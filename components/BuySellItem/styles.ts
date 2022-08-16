import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    marginVertical: RFValue(10),
  },
  textContainer: {
    flex: 1,
    marginHorizontal: RFValue(15),
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
  },
  desc: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
});

export default styles;
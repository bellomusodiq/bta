import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    marginVertical: RFValue(10),
    borderWidth: 1,
    borderColor: "#F0F0F0",
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: RFValue(15),
  },
  title: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(16),
    lineHeight: RFValue(20),
    marginBottom: 8,
  },
  desc: {
    color: "#979797",
    fontSize: RFValue(12),
    lineHeight: RFValue(14),
  },
});

export default styles;

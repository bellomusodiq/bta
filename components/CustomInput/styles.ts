import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(134),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(25),
  },
  iconContainer: {
    marginRight: RFValue(8),
  },
  rightContainer: {
    marginLeft: RFValue(8),
  },
  input: {
    color: "#979797",
    fontSize: RFValue(16),
    flex: 1,
  },
});

export default styles;

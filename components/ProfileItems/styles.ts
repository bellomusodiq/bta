import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    backgroundColor: "#FBFBFB",
  },
  itemContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {},
  itemText: {
    flex: 1,
    marginHorizontal: 20,
    fontSize: RFValue(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  profileItems: {
    marginBottom: RFValue(24),
  },
  title: {
    color: "#979797",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginBottom: RFValue(16),
  },
});

export default styles;

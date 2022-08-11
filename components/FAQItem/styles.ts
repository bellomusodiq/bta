import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 8,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginRight: 10,
    flex: 1,
  },
  divider: {
    marginVertical: 16,
    width: RFValue(35),
    height: 1,
    backgroundColor: "#3861FB",
  },
  description: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
});

export default styles;

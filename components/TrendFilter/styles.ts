import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  trendFilterItem: {
    marginRight: RFValue(12),
    paddingVertical: RFValue(4),
    paddingHorizontal: RFValue(10),
    borderRadius: RFValue(48),
    borderWidth: 1,
    borderColor: "#F0F0F0",
    zIndex: 30,
  },
  trendFilterItemText: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
});

export default styles;

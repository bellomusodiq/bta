import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  trendFilterItem: {
    marginRight: RFValue(24),
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(16),
    borderRadius: RFValue(48),
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  trendFilterItemText: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: RFValue(15),
  },
  image: {
    width: RFValue(32),
    height: RFValue(32),
  },
  priceContainer: {
    flex: 0.6,
  },
  priceTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(15),
    lineHeight: RFValue(24),
  },
  price: {
    fontSize: RFValue(12),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  rateContainer: {
    flex: 0.2,
  },
  rateTitle: {
    fontSize: RFValue(15),
    lineHeight: RFValue(24),
  },
  rate: {
    fontSize: RFValue(12),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  button: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(46),
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(22),
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#3861FB",
    fontSize: RFValue(12),
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  emptyContainer: {
    flex: 1,
    height: height(0.8),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 101,
    width: 147,
  },
  text: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
    marginTop: RFValue(20),
    width: "50%",
    textAlign: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(15),
    backgroundColor: "#3861FB",
    paddingHorizontal: width(0.05),
    zIndex: 3,
  },
  headerLeft: {
    width: RFValue(28),
    color: "white",
  },
  headerRight: {
    width: RFValue(28),
    color: "white",
  },
  header: {
    flex: 1,
    marginHorizontal: RFValue(2),
    textAlign: "center",
    fontSize: RFValue(18),
    fontFamily: "Inter_600SemiBold",
    color: "white",
  },
  shadow: {
    // minHeight: 10,
    // // borderBottomColor: "rgba(51, 51, 51, 0.05)",
    // // borderBottomWidth: 3,
    // shadowOffset: { width: 0, height: 8 },
    // borderTopColor: "#F0F0F0",
    // borderTopWidth: 1,
    // shadowRadius: 5,
    // shadowColor: "#333333",
    // // shadowOpacity: 0.25,
    // elevation: 1,
    // zIndex: 3,
    // // background color must be set
    // backgroundColor: "#FFF", // invisible color
    // flexDirection: "column",
    // // marginTop: -3,
  },
});

export default styles;

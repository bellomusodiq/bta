import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#FBFBFB",
    paddingTop: 15,
  },
  divider: {
    height: 2,
    // width: "100%",
    backgroundColor: "#EEE",
    // alignSelf: "stretch",
    marginTop: -2,
  },
  tabItem: {
    marginRight: RFValue(20),
  },
  tabItemTitle: {
    marginBottom: RFValue(10),
    fontSize: RFValue(15),
    lineHeight: RFValue(18),
    fontFamily: "Inter_600SemiBold",
  },
  indicator: {
    height: 2,
    backgroundColor: "#3861FB",
  },
  flatList: {
    zIndex: 2,
    paddingHorizontal: 24,
  },
});

export default styles;

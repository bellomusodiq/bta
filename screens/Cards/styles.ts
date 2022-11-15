import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { height } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: RFValue(20),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginLeft: 8,
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    marginTop: 30,
    width: "80%",
    alignSelf: "center",
    height: height(0.35),
    marginBottom: 30,
  },
  bodyTitle: {
    marginTop: 20,
    marginBottom: 24,
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(24),
    textAlign: "center",
  },
  bodyText: {
    fontSize: RFValue(14),
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 68,
  },
});

export default styles;

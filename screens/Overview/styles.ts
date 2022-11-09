import { StyleSheet } from "react-native";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: width(0.05),
    paddingVertical: height(0.015),
  },
  loadingContainer: {
    flex: 1,
    height: height(0.9),
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: "#3861FB",
    width: width(1),
    marginLeft: -width(0.05),
    paddingHorizontal: width(0.05),
    paddingBottom: 15,
  },
});

export default styles;

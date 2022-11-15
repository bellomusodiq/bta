import { StyleSheet } from "react-native";
import { height, width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: width(0.05),
    paddingVertical: height(0.015),
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    height: height(0.9),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  errorText: {
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: "#3861FB",
    width: width(1),
    paddingHorizontal: width(0.05),
    paddingBottom: 15,
  },
  assetContainer: {
    paddingHorizontal: width(0.05),
    backgroundColor: "white",
  },
});

export default styles;

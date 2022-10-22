import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instructions: {
    fontSize: RFValue(16),
  },
  copyButton: {
    backgroundColor: "#3861FB",
    marginVertical: RFValue(16),
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
    width: "100%",
  },
  copyButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
  doneButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  doneButtonText: {
    fontSize: RFValue(16),
    color: "black",
  },
});

export default styles;

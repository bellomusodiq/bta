import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  title: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(16),
  },
  container: {
    flex: 1,
    paddingVertical: RFValue(32),
  },
  item: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    marginBottom: RFValue(16),
  },
  complete: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    textAlign: "center",
    marginBottom: RFValue(32),
    color: "#979797",
  },
  divider: {
    backgroundColor: "#F0F0F0",
    height: 1,
    marginTop: RFValue(8),
    marginBottom: RFValue(24),
  },
  verify: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(24),
  },
  stepContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    flexDirection: "row",
  },
  navigation: {
    alignItems: "center",
    marginRight: 20,
    alignSelf: "center",
  },
  verticalLine: {
    width: 1,
    backgroundColor: "#CCCCCC",
    height: RFValue(80),
  },
  steps: {
    flex: 1,
  },
  stepDivider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 24,
  },
  stepsItem: {},
  stepTitle: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  stepText: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    color: "#979797",
  },
  footer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0,

    elevation: 2,
  },
  footerButton: {
    backgroundColor: "#3861FB",
    marginVertical: RFValue(10),
    marginHorizontal: width(0.05),
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(134),
  },
  footerButtonText: {
    color: "white",
    fontSize: RFValue(16),
  },
  margin: {
    marginBottom: 100,
  },
});

export default styles;

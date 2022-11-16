import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  iconContainer: {
    width: RFValue(42),
    height: RFValue(42),
    borderRadius: RFValue(42),
    backgroundColor: "#F1F4FF",
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    backgroundColor: "#FBFBFB",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    marginBottom: RFValue(24),
    marginTop: RFValue(32),
  },
  kycText: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: 16,
  },
  progress: {
    height: 3,
    borderRadius: 3,
    backgroundColor: "#A6B9FF",
    marginBottom: 8,
  },
  progressCompleted: {
    height: 3,
    borderRadius: 3,
    backgroundColor: "#3861FB",
    marginBottom: 8,
  },
  progressText: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginBottom: RFValue(32),
  },
  title: {
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
    color: "#000000",
    marginBottom: RFValue(16),
  },
  subTitle: {
    color: "#979797",
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(32),
    letterSpacing: 0.01,
  },
  inputContainer: {
    marginBottom: RFValue(16),
  },
  datePickerContainer: {
    backgroundColor: "#FBFBFB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: RFValue(134),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(25),
  },
  datePickerText: {
    color: "#979797",
    fontSize: RFValue(15),
    flex: 1,
  },
  datePicker: {
    marginLeft: 10,
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
});

export default styles;

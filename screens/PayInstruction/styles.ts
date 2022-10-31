import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  supportButton: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  supportText: {
    fontSize: RFValue(14),
    color: "black",
    marginLeft: 5,
  },
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(20),
  },
  iconContainer: {
    width: 39,
    height: 39,
    backgroundColor: "#3861FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    marginHorizontal: RFValue(7.5),
  },
  loadingIcon: {
    width: RFValue(7.5),
    height: RFValue(7.5),
    backgroundColor: "#3861FB",
    transform: [
      {
        rotateZ: "-45deg",
      },
    ],
    marginHorizontal: RFValue(7.5),
  },
  header: {
    marginVertical: RFValue(20),
    textAlign: "center",
    color: "#333333",
    fontSize: RFValue(14),
    fontFamily: "Inter_600SemiBold",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  itemTitle: {
    fontSize: RFValue(12),
    fontFamily: "Inter_400Regular",
  },
  copyBoxContainer: {
    flexDirection: "row",
  },
  copyBox: {
    flex: 1,
    marginRight: RFValue(5),
    height: RFValue(46),
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F0F0F0",
    paddingHorizontal: 8,
  },
  copyBoxText: {
    color: "#979797",
    fontSize: RFValue(18),
  },
  copyButton: {
    height: RFValue(46),
    width: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#F0F0F0",
    paddingHorizontal: 8,
  },
  copyText: {
    color: "#3861FB",
  },
  accountText: {
    fontSize: RFValue(16),
    marginTop: RFValue(10),
  },
  button: {
    backgroundColor: "#3861FB",
    borderRadius: 138,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(0),
  },
  buttonText: {
    color: "white",
    fontSize: RFValue(16),
  },
  note: {
    marginTop: RFValue(15),
    flexDirection: "row",
    marginBottom: RFValue(30),
  },
  noteText: {
    marginLeft: 10,
    flex: 1,
    color: "#979797",
    fontSize: RFValue(12),
  },
});

export default styles;

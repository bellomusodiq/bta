import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { width } from "../../consts/dimenentions";

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: RFValue(50),
  },
  editButton: {
    position: "absolute",
    right: 0,
    top: RFValue(50),
  },
  profileImage: {
    width: RFValue(80),
    height: RFValue(80),
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: RFValue(32),
  },
  profileName: {
    fontSize: RFValue(20),
    lineHeight: RFValue(24),
    marginBottom: RFValue(8),
  },
  username: {
    fontSize: RFValue(14),
    lineHeight: RFValue(24),
    marginBottom: RFValue(28),
    color: "#979797",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    width: width(1),
    marginLeft: -width(0.05),
    marginBottom: RFValue(24),
  },
  logoutButton: {
    width: "100%",
    padding: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(130),
    borderColor: "#F0F0F0",
    borderWidth: 1,
    marginTop: RFValue(20),
    marginBottom: RFValue(30),
  },
  logoutButtonText: {
    fontSize: RFValue(16),
    color: "#D71212",
  },
  bitafrika: {
    alignSelf: "center",
    width: "22%",
    marginBottom: RFValue(30),
  },
});

export default styles;

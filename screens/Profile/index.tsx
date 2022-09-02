import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootTabScreenProps } from "../../types";
import styles from "./styles";
import ProfileImage from "../../assets/images/profile.png";
import CustomText from "../../components/CustomText";
import {
  Bank,
  Bill,
  BitcoinCard,
  DirectboxReceive,
  Edit2,
  FingerScan,
  MedalStar,
  MessageQuestion,
  Notification,
  PasswordCheck,
  Ranking,
  Setting2,
  Shield,
  ShieldSecurity,
  UserRemove,
  UserTag,
} from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ProfileItems from "../../components/ProfileItems";
import BitAfrikaImage from "../../assets/images/bitafrika.png";
import { useNavigation } from "@react-navigation/native";
import SendIcon from "../../components/icons/send-icon";

const ProfileScreen: React.FC<RootTabScreenProps<"Profile">> = () => {
  const navigation = useNavigation();
  const [biometrics, setBiometrics] = useState<boolean>(true);
  const [notification, setNotification] = useState<boolean>(true);

  return (
    <ScreenLayout scrollable>
      <View style={styles.headerContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <CustomText style={styles.profileName}>Emmanuel Nkrumah</CustomText>
        <CustomText style={styles.username}>Username: Jayyo98</CustomText>
        <TouchableOpacity style={styles.editButton}>
          <Edit2 size={RFValue(20)} color="#292D32" />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={() => navigation.navigate("KYCBegin")}
        style={styles.note}
      >
        <MedalStar size={RFValue(24)} color="#3861FB" variant="Linear" />
        <View style={styles.noteTextContainer}>
          <CustomText style={styles.noteTextTitle}>Complete KYC</CustomText>
          <CustomText style={styles.noteText}>
            Verify your account to be able to able to buy, sell, send and
            receive crypto without limits.
          </CustomText>
        </View>
        <View style={styles.noteIconContainer}>
          <SendIcon />
        </View>
      </TouchableOpacity>
      <ProfileItems
        data={[
          {
            title: "Biometrics",
            icon: <FingerScan size={24} color="#3861FB" variant="Bulk" />,
            isToggle: true,
            active: biometrics,
            onToggle: () => setBiometrics(!biometrics),
          },
          {
            title: "Notifications",
            icon: <Notification size={24} color="#3861FB" variant="Bold" />,
            isToggle: true,
            active: notification,
            onToggle: () => setNotification(!notification),
          },
          {
            title: "Manage crypto asset",
            onPress: () => {},
            icon: <Setting2 size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "Account limits",
            onPress: () => navigation.navigate("AccountLimits"),
            icon: <BitcoinCard size={24} color="#3861FB" variant="TwoTone" />,
          },
        ]}
        title="Preferences"
      />
      <ProfileItems
        data={[
          {
            title: "Payment accounts",
            onPress: () => navigation.navigate("PaymentAccounts"),
            icon: <Bank size={24} color="#3861FB" variant="Bulk" />,
          },
        ]}
        title="Payment"
      />
      <ProfileItems
        data={[
          {
            title: "Change email",
            onPress: () => navigation.navigate("ChangeEmail"),
            icon: <DirectboxReceive size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "Change password",
            onPress: () => navigation.navigate("ChangePassword"),
            icon: <PasswordCheck size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "2FA security",
            onPress: () => {},
            icon: <ShieldSecurity size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Security"
      />
      <ProfileItems
        data={[
          {
            title: "Rate us",
            onPress: () => {},
            icon: <Ranking size={24} color="#3861FB" variant="Bulk" />,
          },
          {
            title: "Talk to us via whatsapp",
            onPress: () => {},
            icon: <UserTag size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "Frequently asked questions",
            onPress: () => navigation.navigate("FAQs"),
            icon: <MessageQuestion size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Feedback & Support"
      />
      <ProfileItems
        data={[
          {
            title: "Terms of use",
            onPress: () => {},
            icon: <Bill size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "Privacy policy",
            onPress: () => {},
            icon: <Shield size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Legal"
      />
      <ProfileItems
        data={[
          {
            title: "Access logs",
            onPress: () => {},
            icon: <ShieldSecurity size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Logs"
      />
      <ProfileItems
        data={[
          {
            title: "Deactivate account",
            onPress: () => {},
            icon: <UserRemove size={24} color="#3861FB" variant="Bulk" />,
          },
        ]}
        title="Deactivate"
      />
      <TouchableOpacity style={styles.logoutButton}>
        <CustomText style={styles.logoutButtonText}>SIGN OUT</CustomText>
      </TouchableOpacity>
      <Image
        style={styles.bitafrika}
        source={BitAfrikaImage}
        resizeMethod="scale"
        resizeMode="contain"
      />
    </ScreenLayout>
  );
};

export default ProfileScreen;

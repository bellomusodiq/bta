import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
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
  Eye,
  EyeSlash,
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
import { logoutHandler } from "../../utils/logout";
import {
  checkKycStatusApi,
  deactivateAccountApi,
  disableNotificationApi,
  enableNotificationApi,
  getNotificationStatusApi,
} from "../../api/profile.api";
import { useAppSelector } from "../../store";
import ReactNativeModal from "react-native-modal";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import CloseIcon from "../../components/icons/close-icon";
import CustomInput from "../../components/CustomInput";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";

const ProfileScreen: React.FC<RootTabScreenProps<"Profile">> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { user, dashboardData } = useAppSelector((state) => state.auth);

  const navigation = useNavigation();
  const [biometrics, setBiometrics] = useState<boolean>(true);
  const [notification, setNotification] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [logout, setLogout] = useState<boolean>(false);
  const [kycActivated, setKycActivated] = useState<boolean>(true);

  const deactivateAccount = async () => {
    setLoading(true);
    const result = await deactivateAccountApi(navigation, user.token, password);
    setLoading(false);
    if (result.success) {
      logoutHandler(navigation);
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
    }
  };

  const verifyKycStatus = async () => {
    const result = await checkKycStatusApi(navigation, user.token);
    console.log(result);

    setKycActivated(result.data.kycVerified);
  };

  const toggleNotification = async () => {
    setNotification(!notification);
    if (notification) {
      await disableNotificationApi(navigation, user.token);
    } else {
      await enableNotificationApi(navigation, user.token, "some-token");
    }
  };

  const getNotificationStatus = async () => {
    const result = await getNotificationStatusApi(navigation, user.token);
    if (result.success) {
      setNotification(result.tokenEnabled);
    }
  };

  useEffect(() => {
    getNotificationStatus();
    verifyKycStatus();
  }, []);

  return (
    <ScreenLayout scrollable SafeAreaBackground="white">
      <ReactNativeModal
        isVisible={showModal}
        // hasBackdrop
        backdropOpacity={0.4}
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
            <View style={styles.backDrop} />
          </TouchableWithoutFeedback>
        }
        swipeDirection={["up", "left", "right", "down"]}
        onSwipeComplete={() => setShowModal(!showModal)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderContainer}>
            <CustomText style={styles.modalHeader}>
              Deactivate Account
            </CustomText>
            <TouchableOpacity
              onPress={() => setShowModal(!showModal)}
              style={styles.modalHeaderButton}
            >
              <CustomText style={styles.modalHeaderButtonText}>
                Close
              </CustomText>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.modalDivider} />
          <View style={styles.modalContent}>
            <CustomText style={styles.modalText}>
              Are you sure you want to deactivate you account?
            </CustomText>
            <CustomText style={styles.inputLabel}>
              Enter password to confirm
            </CustomText>
            <CustomInput
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
              rightComponent={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <Eye color="black" variant="Bold" size={RFValue(20)} />
                  ) : (
                    <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.modalFooter}>
            <CustomButton
              loading={loading}
              disabled={!password}
              onPress={deactivateAccount}
              style={styles.footerButton}
            >
              <CustomText style={styles.footerButtonText}>Confirm</CustomText>
            </CustomButton>
          </View>
        </View>
      </ReactNativeModal>
      <View style={styles.headerContainer}>
        {/* <Image source={ProfileImage} style={styles.profileImage} /> */}
        <View style={styles.profilePlaceHolder}>
          <CustomText style={styles.profileImageText}>
            {user.firstName.charAt(0)}
          </CustomText>
        </View>
        <CustomText style={styles.profileName}>{user.firstName}</CustomText>
        <CustomText style={styles.username}>
          Username: {user.username}
        </CustomText>
        {/* <TouchableOpacity style={styles.editButton}>
          <Edit2 size={RFValue(20)} color="#292D32" />
        </TouchableOpacity> */}
      </View>
      <View style={styles.divider} />
      {!kycActivated && (
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
      )}
      <ProfileItems
        data={[
          // {
          //   title: "Biometrics",
          //   icon: <FingerScan size={24} color="#3861FB" variant="Bulk" />,
          //   isToggle: true,
          //   active: biometrics,
          //   onToggle: () => setBiometrics(!biometrics),
          // },
          {
            title: "Notifications",
            icon: <Notification size={24} color="#3861FB" variant="Bold" />,
            isToggle: true,
            active: notification,
            onToggle: toggleNotification,
          },
          {
            title: "Manage crypto asset",
            onPress: () => navigation.navigate("ManageAsset"),
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
          // {
          //   title: "Change PIN",
          //   onPress: () => navigation.navigate("SetPin"),
          //   icon: <ShieldSecurity size={24} color="#3861FB" variant="Bold" />,
          // },
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
            onPress: () =>
              navigation.navigate("WebView", {
                url: `https://api.whatsapp.com/send?phone=${
                  dashboardData?.support.whatsapp.value.split("+")[1]
                }`,
              }),
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
            onPress: () =>
              navigation.navigate("WebView", {
                url: "https://bitafrika.com/terms",
              }),
            icon: <Bill size={24} color="#3861FB" variant="Bold" />,
          },
          {
            title: "Privacy policy",
            onPress: () =>
              navigation.navigate("WebView", {
                url: "https://bitafrika.com/privacy",
              }),
            icon: <Shield size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Legal"
      />
      <ProfileItems
        data={[
          {
            title: "Access logs",
            onPress: () => navigation.navigate("AccessLogs"),
            icon: <ShieldSecurity size={24} color="#3861FB" variant="Bold" />,
          },
        ]}
        title="Logs"
      />
      <ProfileItems
        data={[
          {
            title: "Deactivate account",
            onPress: () => setShowModal(true),
            icon: <UserRemove size={24} color="#3861FB" variant="Bulk" />,
          },
        ]}
        title="Deactivate"
      />
      <TouchableOpacity
        onPress={async () => {
          setLogout(true);
          await logoutHandler(navigation);
          setLogout(false);
        }}
        style={styles.logoutButton}
      >
        {logout ? (
          <ActivityIndicator size="small" />
        ) : (
          <CustomText style={styles.logoutButtonText}>SIGN OUT</CustomText>
        )}
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

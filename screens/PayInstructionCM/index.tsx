import { Call, Mobile, Timer1 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { Alert, Linking, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import SupportIcon from "../../components/icons/support-icon";
import StepItem from "../../components/StepItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";
import Copy from "../../components/Copy";
import { useAppSelector } from "../../store";
import CustomButton from "../../components/CustomButton";

const PayInstructionScreen: React.FC<
  RootStackScreenProps<"PayInstruction">
> = ({ route }) => {
  const { dashboardData } = useAppSelector((state) => state.auth);
  const { params } = route;
  const [disableDone, setDisableDone] = useState<boolean>(true);

  console.log("params", params);

  const navigation = useNavigation();

  const HeaderRightComponent = (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(
          `https://wa.me/${dashboardData?.support.whatsapp.value.split("+")[1]}`
        )
      }
      style={styles.supportButton}
    >
      <Call size={RFValue(14)} color="black" />
      <CustomText style={styles.supportText}>Support</CustomText>
    </TouchableOpacity>
  );

  const onPayNow = () => {
    Linking.openURL(`tel:${decodeURI(params.ussd)}`);
  };

  return (
    <ScreenLayout
      scrollable
      showHeader
      title=""
      headerRight={HeaderRightComponent}
      flexibleHeader
      SafeAreaBackground="white"
    >
      <View style={styles.loadingContainer}>
        <View style={styles.iconContainer}>
          <Mobile size={24} color="#FFF" variant="Bold" />
        </View>
        <View style={styles.loadingIcon} />
        <View style={[styles.loadingIcon, { opacity: 0.5 }]} />
        <View style={[styles.loadingIcon, { opacity: 0.2 }]} />
        <View style={styles.iconContainer}>
          <SupportIcon />
        </View>
      </View>
      <CustomText style={styles.header}>
        MOBILE MONEY PAYMENT INSTRUCTIONS
      </CustomText>
      <View style={styles.divider} />
      <CustomText style={styles.itemTitle}>
        {params.paymentInstruction}
      </CustomText>
      {/* <CustomButton onPress={onPayNow}>
        <CustomText style={styles.buttonText}>Pay Now</CustomText>
      </CustomButton> */}
      <CustomButton
        disabled={disableDone}
        onPress={() =>
          // TODO: call STEP: 4 for cameroon before navigation
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "Pending",
              },
            ],
          })
        }
      >
        <CustomText style={styles.buttonText}>DONE</CustomText>
      </CustomButton>
      <View style={styles.note}>
        <Timer1 size={RFValue(20)} color="#3861FB" />
        <CustomText style={styles.noteText}>
          Your tokens might take up to 15 minutes to arrive. Contact support if
          your payment takes longer than usual
        </CustomText>
      </View>
    </ScreenLayout>
  );
};

export default PayInstructionScreen;

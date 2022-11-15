import { Call, Mobile, Timer1 } from "iconsax-react-native";
import React, { useEffect } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
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

const PayInstructionScreen: React.FC<
  RootStackScreenProps<"PayInstruction">
> = ({ route }) => {
  const { params } = route;
  const navigation = useNavigation();

  const HeaderRightComponent = (
    <TouchableOpacity style={styles.supportButton}>
      <Call size={RFValue(14)} color="white" />
      <CustomText style={styles.supportText}>Support</CustomText>
    </TouchableOpacity>
  );

  const showInstruction = () => {
    Alert.alert(
      "REFERENCE WARNING",
      "Always make sure to copy the\n REFERENCE using the blue 'Copy Reference' button.\n\nFaliure to enter the REFERENCE stated in the payment instructions will cause your buy order to fail. \n\n All failed refunds to your Mobile Money account will attract a 0.5% fee \n\n Thank you",
      [
        {
          text: "I understand",
        },
      ]
    );
  };

  useEffect(() => {
    showInstruction();
  }, []);


  return (
    <ScreenLayout
      scrollable
      showHeader
      title=""
      headerRight={HeaderRightComponent}
      flexibleHeader
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
      <StepItem title="Step 1:">
        <CustomText style={styles.itemTitle}>
          Copy the reference number below and proceed to step 2
        </CustomText>
        <View style={styles.copyBoxContainer}>
          <View style={styles.copyBox}>
            <CustomText style={styles.copyBoxText}>
              {params.reference}
            </CustomText>
          </View>
          <Copy text={params.reference}>
            <View style={styles.copyButton}>
              <CustomText style={styles.copyText}>COPY</CustomText>
            </View>
          </Copy>
        </View>
      </StepItem>
      <StepItem title="Step 2:">
        <CustomText style={styles.itemTitle}>
          {params.paymentInstruction}
        </CustomText>
      </StepItem>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pending", { tab: "Buy" })}
        style={styles.button}
      >
        <CustomText style={styles.buttonText}>DONE</CustomText>
      </TouchableOpacity>
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

import { Call, Mobile, Timer1 } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import SupportIcon from "../../components/icons/support-icon";
import StepItem from "../../components/StepItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import * as Clipboard from "expo-clipboard";

const PayInstructionScreen: React.FC<
  RootStackScreenProps<"PayInstruction">
> = () => {
  const copyToClipBoard = async () => {
    await Clipboard.setStringAsync("42HFOG66T95");
  };
  const HeaderRightComponent = (
    <TouchableOpacity style={styles.supportButton}>
      <Call size={RFValue(14)} color="#000" />
      <CustomText style={styles.supportText}>Support</CustomText>
    </TouchableOpacity>
  );
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
            <CustomText style={styles.copyBoxText}>42HFOG66T95</CustomText>
          </View>
          <TouchableOpacity onPress={copyToClipBoard} style={styles.copyButton}>
            <CustomText style={styles.copyText}>COPY</CustomText>
          </TouchableOpacity>
        </View>
      </StepItem>
      <StepItem title="Step 2:">
        <CustomText style={styles.itemTitle}>
          Pay exactly GHS 100 into the account below via mobile money. Please do
          not use a different reference when making your payment
        </CustomText>
        <CustomText style={styles.accountText}>
          <CustomText style={{ color: "#979797" }}>Account:</CustomText>{" "}
          0243037706
        </CustomText>
        <CustomText style={styles.accountText}>
          <CustomText style={{ color: "#979797" }}>Name:</CustomText> BITAFRIKA
          LTD EMMANUEL KWABENA NKRUMAH
        </CustomText>
      </StepItem>
      <TouchableOpacity style={styles.button}>
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
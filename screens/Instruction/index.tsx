import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { reviewBuyOrderApi } from "../../api/profile.api";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import Toast from "react-native-toast-message";
import Copy from "../../components/Copy";

const InstructionScreen: React.FC<RootStackScreenProps<"Instruction">> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  const [amount, setAmount] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const topUpSummary = async () => {
    setLoading(true);
    const result = await reviewBuyOrderApi(
      navigation,
      user.token,
      params.symbol,
      params.name,
      "manual",
      params.platform,
      params.contract,
      amount,
      params.value,
      params.id.toString()
    );
    setLoading(false);
    if (result.success) {
      navigation.navigate("Summary", {
        ...result,
        sell: false,
      });
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
    }
  };

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
    <ScreenLayout showHeader title="Payment Instructions">
      <View style={styles.container}>
        <CustomText style={styles.instructions}>
          {params.paymentInstruction}
        </CustomText>
        <Copy text={params.reference}>
          <View style={styles.copyButton}>
            <CustomText style={styles.copyButtonText}>
              Copy Reference
            </CustomText>
          </View>
        </Copy>
        <CustomButton
          onPress={topUpSummary}
          style={styles.doneButton}
          buttonText={styles.doneButtonText}
        >
          Done
        </CustomButton>
      </View>
    </ScreenLayout>
  );
};

export default InstructionScreen;

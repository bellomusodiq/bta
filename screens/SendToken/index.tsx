import { useNavigation } from "@react-navigation/native";
import { Scan } from "iconsax-react-native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";

const SendTokenScreen: React.FC<RootStackScreenProps<"SendToken">> = () => {
  const [currency, setCurrency] = useState<string>("BTC");
  const [amount, setAmount] = useState<number | null>();
  const [address, setAddress] = useState<string>("");
  const navigation = useNavigation();
  const headerRight = (
    <TouchableOpacity>
      <Scan size={RFValue(20)} color="#000" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    navigation.navigate("SendTokenSummary");
  };

  const toggleCurrency = () => {
    setCurrency(currency === "BTC" ? "USD" : "BTC");
  };

  const setMaxAmount = () => {
    setAmount(100.5);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setAddress(text);
  };

  return (
    <ScreenLayout
      showHeader
      title="Send bitcoin"
      showShadow
      scrollable
      headerRight={headerRight}
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onContinue}
            // disabled={!Boolean(paymentMethod)}
            style={[
              styles.footerButton,
              {
                backgroundColor: "#3861FB",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Recipent address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          rightComponent={
            <TouchableOpacity onPress={fetchCopiedText}>
              <CustomText style={styles.pasteText}>PASTE</CustomText>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={String(amount || "")}
          onChangeText={(text) => setAmount(Number(text))}
          placeholder={`Amount in ${currency}`}
          rightComponent={
            <View style={styles.amountRight}>
              <TouchableOpacity onPress={setMaxAmount}>
                <CustomText style={styles.maxText}>max</CustomText>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCurrency} style={styles.tablet}>
                <CustomText style={styles.tabletText}>{currency}</CustomText>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      <CustomText style={styles.availableText}>
        Available in wallet: 0.0034 BTC
      </CustomText>
    </ScreenLayout>
  );
};

export default SendTokenScreen;

import { useNavigation } from "@react-navigation/native";
import { Scan } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";
import { BarCodeScanner } from "expo-barcode-scanner";
import { validateSendCryptoApi } from "../../api/profile.api";
import { useAppSelector } from "../../store";
import Toast from "react-native-toast-message";
import CustomButton from "../../components/CustomButton";

const SendTokenScreen: React.FC<RootStackScreenProps<"SendToken">> = ({
  route,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();
  const [currency, setCurrency] = useState<string>(route.params?.symbol);
  const [amount, setAmount] = useState<number | null>();
  const [address, setAddress] = useState<string>("");
  const [openBarcode, setOpenBarcode] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setAddress(data);
    setOpenBarcode(false);
  };

  const headerRight = (
    <TouchableOpacity onPress={() => setOpenBarcode(true)}>
      <Scan size={20} color="#000" />
    </TouchableOpacity>
  );

  const getAmount = () => {
    if (route.params?.symbol === "TRX" || route.params?.symbol === "USDT") {
      return Math.trunc(amount);
    }
    return amount;
  };

  const onContinue = async () => {
    setLoading(true);
    const result = await validateSendCryptoApi(
      user.token,
      route.params?.symbol,
      address,
      currency === "USD" ? "USD" : "CRYPTO",
      getAmount()?.toString(),
      route.params?.name,
      "FASTEST",
      route.params?.contract,
      route.params?.platform
    );
    setLoading(false);
    if (result.success) {
      navigation.navigate("SendTokenSummary", {
        ...result,
        transmissionMode: currency === "USD" ? "USD" : "CRYPTO",
        contract: route.params?.contract,
        platform: route.params?.platform,
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

  const toggleCurrency = () => {
    setCurrency(currency !== "USD" ? "USD" : route.params?.symbol);
  };

  const setMaxAmount = () => {
    setAmount(
      currency === "USD" ? +route.params?.usdValue : +route.params?.cryptoValue
    );
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setAddress(text);
  };

  const disabled = !address || !amount;

  return (
    <ScreenLayout
      showHeader
      title={`Send ${route.params?.name}`}
      showShadow
      headerRight={headerRight}
      footer={
        <View style={styles.footer}>
          <CustomButton
            loading={loading}
            onPress={onContinue}
            disabled={disabled}
            style={[styles.footerButton]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </CustomButton>
        </View>
      }
    >
      <View style={styles.container}>
        {openBarcode ? (
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={styles.barcode}
          />
        ) : (
          <>
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
                    <TouchableOpacity
                      onPress={toggleCurrency}
                      style={styles.tablet}
                    >
                      <CustomText style={styles.tabletText}>
                        {currency === "USD" ? route.params?.symbol : "USD"}
                      </CustomText>
                    </TouchableOpacity>
                  </View>
                }
              />
            </View>
            <CustomText style={styles.availableText}>
              Available in wallet:{" "}
              {`${
                currency !== "USD"
                  ? route.params?.cryptoValue
                  : route.params?.usdValue
              } ${currency === "USD" ? "USD" : route.params?.symbol}`}
            </CustomText>
          </>
        )}
      </View>
    </ScreenLayout>
  );
};

export default SendTokenScreen;

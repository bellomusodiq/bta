import { DocumentCopy, Export, SearchNormal1 } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, Image, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AssetItem from "../../components/AssetItem";
import CustomInput from "../../components/CustomInput";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import BitcoinImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TronImage from "../../assets/images/TRX.png";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import BarcodeImage from "../../assets/images/barcode.png";
import CustomText from "../../components/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import CopyShareBtns from "../../components/CopyShareBtns";

const data = [
  {
    image: BitcoinImage,
    amountUSD: 20.44,
    amountCrypto: 0.007,
    currency: "BTC",
    title: "Bitcoin",
  },
  {
    image: LTCImage,
    amountUSD: 20.44,
    amountCrypto: 0.007,
    currency: "LTC",
    title: "LiteCoin",
  },
  {
    image: TronImage,
    amountUSD: 20.44,
    amountCrypto: 0.007,
    currency: "TRX",
    title: "Tron",
  },
];

const ReceiveCryptoSummaryScreen: React.FC<
  RootStackScreenProps<"ReceiveCryptoSummary">
> = () => {
  const data = [{ label: "Bitcoin - BTC", value: "BTC" }];
  const [token, setToken] = useState<any>(data[0]);
  const navigation = useNavigation();
  const navigateToSendToken = () => navigation.navigate("SendToken");
  return (
    <ScreenLayout showHeader showShadow scrollable title="Receive">
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            value={token}
            onChange={(val) => setToken(val)}
            style={styles.dropdown}
            data={data}
            placeholder={"Select currency"}
            labelField="label"
            valueField="value"
            selectedTextStyle={{ color: "#3861FB" }}
          />
        </View>
        <Image source={BarcodeImage} style={styles.barcode} />
        <CustomText style={styles.walletAddressTitle}>
          Wallet Address
        </CustomText>
        <CustomText style={styles.walletAddress}>
          0x8E409d59C0A9f4186CA9B22A68325abC54D1870b
        </CustomText>
        <CopyShareBtns />
        <CustomText style={styles.footerText}>
          Please send only{" "}
          <CustomText style={styles.boldText}>BITCOIN (BTC)</CustomText> to this
          wallet address. Sending other assests to this address will result in
          permanent loss
        </CustomText>
      </View>
    </ScreenLayout>
  );
};

export default ReceiveCryptoSummaryScreen;

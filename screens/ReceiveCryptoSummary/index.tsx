import { DocumentCopy, Export, SearchNormal1 } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, Image, TextInput, View } from "react-native";
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
  const [bank, setBank] = useState<any>();
  const [query, setQuery] = useState<any>();
  const navigation = useNavigation();
  const navigateToSendToken = () => navigation.navigate("SendToken");
  return (
    <ScreenLayout showHeader showShadow scrollable title="Receive">
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            renderInputSearch={() => (
              <View style={styles.searchInputContainer}>
                <SearchNormal1
                  color="#979797"
                  size={RFValue(16)}
                  variant="Linear"
                />
                <TextInput
                  placeholder="Search for banks"
                  style={styles.searchInput}
                  placeholderTextColor="#979797"
                  value={query}
                  onChangeText={(value) => setQuery(value)}
                />
                <TouchableOpacity onPress={() => setQuery("")}>
                  <CustomText style={styles.searchCancel}>Cancel</CustomText>
                </TouchableOpacity>
              </View>
            )}
            value={bank}
            onChange={(val) => setBank(val)}
            style={styles.dropdown}
            data={[
              {
                label: "Bitcoin - BTC",
                value: "Bitcoin",
                image: (
                  <Image
                    source={BitcoinImage}
                    style={styles.image}
                    resizeMode="contain"
                  />
                ),
              },
            ]}
            renderLeftIcon={() => (bank ? bank.image : null)}
            renderItem={(item, selected) => (
              <View style={styles.dropdownItem}>
                {item.image}
                <View style={styles.dropdownItemContainer}>
                  <CustomText style={styles.dropdownItemText}>
                    {item.label}
                  </CustomText>
                  <CustomText style={styles.rightText}>{item.value}</CustomText>
                </View>
              </View>
            )}
            placeholder={"Select token"}
            labelField="label"
            valueField="value"
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

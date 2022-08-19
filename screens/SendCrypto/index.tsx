import { SearchNormal1 } from "iconsax-react-native";
import React from "react";
import { FlatList, View } from "react-native";
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
    title: "Litecoin",
  },
  {
    image: TronImage,
    amountUSD: 20.44,
    amountCrypto: 0.007,
    currency: "TRX",
    title: "Tron",
  },
];

const SendCryptoScreen: React.FC<RootStackScreenProps<"SendCrypto">> = () => {
  const navigation = useNavigation();
  const navigateToSendToken = () => navigation.navigate("SendToken");
  return (
    <ScreenLayout showHeader showShadow title="Send">
      <View style={styles.input}>
        <CustomInput
          icon={<SearchNormal1 size={RFValue(16)} color="#979797" />}
          placeholder="Search for a token"
        />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <AssetItem
            image={item.image}
            amountUSD={item.amountUSD}
            amountCrypto={item.amountCrypto}
            currency={item.currency}
            title={item.title}
            onPress={navigateToSendToken}
            hideTrend
          />
        )}
      />
    </ScreenLayout>
  );
};

export default SendCryptoScreen;

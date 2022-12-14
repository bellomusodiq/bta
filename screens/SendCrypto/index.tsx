import { SearchNormal1 } from "iconsax-react-native";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AssetItem from "../../components/AssetItem";
import CustomInput from "../../components/CustomInput";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store";
import { coinImage } from "../../consts/images";
import Toast from "react-native-toast-message";

const SendCryptoScreen: React.FC<RootStackScreenProps<"SendCrypto">> = () => {
  const { dashboardData } = useAppSelector((state) => state.auth);

  const [filterData, setFilterData] = useState<any>(dashboardData?.currencies);
  const [query, setQuery] = useState<string>("");
  const navigation = useNavigation();
  const navigateToSendToken = (item) => {
    if (!item.enabled) {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1:
          "This token has not been enabled, navigate to manage asset to enable token",
      });
      return;
    }
    navigation.navigate("SendToken", item);
  };

  const onSearch = (text: string) => {
    setQuery(text);
    const result = dashboardData.currencies.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.symbol.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(result);
  };
  return (
    <ScreenLayout showHeader showShadow title="Send">
      <View style={styles.input}>
        <CustomInput
          icon={<SearchNormal1 size={RFValue(16)} color="#979797" />}
          placeholder="Search for a token"
          onChangeText={onSearch}
          value={query}
        />
      </View>

      <FlatList
        data={filterData}
        renderItem={({ item }) => {
          return (
            <AssetItem
              image={coinImage[item.symbol]}
              amountUSD={item.usdValue}
              amountCrypto={item.cryptoValue}
              currency={item.symbol}
              title={item.name}
              onPress={() => navigateToSendToken(item)}
              hideTrend
              noPercentage
            />
          );
        }}
      />
    </ScreenLayout>
  );
};

export default SendCryptoScreen;

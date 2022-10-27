import { DocumentCopy, Export, SearchNormal1 } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  TextInput,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import CustomText from "../../components/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import CopyShareBtns from "../../components/CopyShareBtns";
import { coinImage } from "../../consts/images";
import { useAppSelector } from "../../store";
import { getCryptoAddressApi } from "../../api/dashboard.api";
import { width } from "../../consts/dimenentions";

const ReceiveCryptoSummaryScreen: React.FC<
  RootStackScreenProps<"ReceiveCryptoSummary">
> = ({ route }) => {
  const isFocused = useIsFocused();
  const { token: selectedToken } = route.params;

  const { dashboardData, user } = useAppSelector((state) => state.auth);
  const data = dashboardData?.currencies.map((currency: any) => ({
    label: currency.name,
    value: currency.symbol,
    platform: currency.platform,
    image: (
      <Image
        source={coinImage[currency.symbol]}
        style={styles.image}
        resizeMode="contain"
      />
    ),
  }));

  const [token, setToken] = useState<any>(
    data.filter((i) => i.value === selectedToken)[0]
  );
  const [bank, setBank] = useState<any>();
  const [query, setQuery] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation();
  const [tokenDetails, setTokenDetails] = useState({});

  const getTokenDetails = async () => {
    setLoading(true);
    setError(false);
    const result = await getCryptoAddressApi(
      user?.token,
      token.value,
      token.platform
    );
    setLoading(false);
    if (result.success) {
      setTokenDetails(result.info);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getTokenDetails();
  }, [ token]);

  return (
    <ScreenLayout showHeader showShadow scrollable title="Receive">
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={getTokenDetails}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <>
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
                      <CustomText style={styles.searchCancel}>
                        Cancel
                      </CustomText>
                    </TouchableOpacity>
                  </View>
                )}
                value={token}
                onChange={(val) => setToken(val)}
                style={styles.dropdown}
                data={data}
                renderLeftIcon={() => (bank ? bank.image : null)}
                renderItem={(item, selected) => (
                  <View style={styles.dropdownItem}>
                    {item.image}
                    <View style={styles.dropdownItemContainer}>
                      <CustomText style={styles.dropdownItemText}>
                        {item.label}
                      </CustomText>
                      <CustomText style={styles.rightText}>
                        {item.value}
                      </CustomText>
                    </View>
                  </View>
                )}
                placeholder={"Select token"}
                labelField="label"
                valueField="value"
              />
            </View>
            <Image
              source={{ uri: tokenDetails.scanString }}
              style={styles.barcode}
              width={width(0.8)}
              height={width(0.8)}
            />
            <CustomText style={styles.walletAddressTitle}>
              Wallet Address
            </CustomText>
            <CustomText style={styles.walletAddress}>
              {tokenDetails.address}
            </CustomText>
            <CopyShareBtns text={tokenDetails.address} token={token.label} />
            <CustomText style={styles.footerText}>
              Please send only{" "}
              <CustomText style={styles.boldText}>
                {token.label} ({token.value.toUpperCase()})
              </CustomText>{" "}
              to this wallet address. Sending other assests to this address will
              result in permanent loss
            </CustomText>
          </View>
        </>
      )}
    </ScreenLayout>
  );
};

export default ReceiveCryptoSummaryScreen;

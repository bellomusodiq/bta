import React, { useEffect, useState } from "react";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { OverviewStackScreenProps } from "../../types";
import styles from "./styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import ManageAssetItem from "../../components/ManageAssetItem";
import {
  enableCryptoAssetApi,
  manageCryptoAssetApi,
} from "../../api/profile.api";
import { useAppSelector } from "../../store";
import CustomButton from "../../components/CustomButton";
import { coinImage } from "../../consts/images";
import Toast from "react-native-toast-message";

const ManageAssetScreen: React.FC<OverviewStackScreenProps<"ManageAsset">> = ({
  navigation,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [assets, setAssets] = useState<any>([]);
  const fetchCryptoAssets = async () => {
    setLoading(true);
    setError(false);
    const result = await manageCryptoAssetApi(navigation, user.token);
    setLoading(false);
    if (result.success) {
      setAssets(result.currencies);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCryptoAssets();
  }, []);

  const toggleAsset = async (item) => {
    if (item.enabled) return false;
    const result = await enableCryptoAssetApi(
      navigation,
      user.token,
      item.symbol,
      item.platform
    );
    if (result.success) {
      const newAssets = [...assets];
      const index = newAssets.findIndex(
        (asset) => asset.symbol === item.symbol
      );
      newAssets[index].enabled = true;
      setAssets(newAssets);
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
    }
  };

  return (
    <ScreenLayout showHeader title="Manage assets">
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={fetchCryptoAssets}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <FlatList
          data={assets}
          renderItem={({ item }) => (
            <ManageAssetItem
              title={`${item.name} (${item.symbol})`}
              confirmations={item.confirmation}
              image={coinImage[item.symbol]}
              active={item.enabled}
              toggleOn={() => toggleAsset(item)}
            />
          )}
        />
      )}
    </ScreenLayout>
  );
};

export default ManageAssetScreen;

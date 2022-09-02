import {
  Export,
  EyeSlash,
  Import,
  MoneyRecive,
  More,
  SearchNormal1,
} from "iconsax-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import MoreIcon from "../../components/icons/more-icon";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import BitcoinImage from "../../assets/images/BTC.png";
import LTCImage from "../../assets/images/LTC.png";
import TronImage from "../../assets/images/TRX.png";
import USDTImage from "../../assets/images/USDT.png";
import UpTrendIcon from "../../components/icons/uptrend-icon";
import { useNavigation } from "@react-navigation/native";

const AssetItem: React.FC<any> = ({
  image,
  title,
  tokenPrice,
  currency,
  amountCrypto,
  amountUSD,
  onPress,
}) => (
  <>
    <TouchableOpacity style={styles.assetItemContainer} onPress={onPress}>
      <Image
        source={image}
        style={styles.assetImage}
        resizeMode="contain"
        resizeMethod="scale"
      />
      <View style={styles.nameContainer}>
        <CustomText style={styles.assetTitle}>{title}</CustomText>
        <CustomText style={styles.assetAbbr}>
          {tokenPrice || currency}{" "}
        </CustomText>
      </View>
      <View style={styles.trendContainer}>
        <UpTrendIcon />
      </View>
      <View style={styles.valueContainer}>
        <CustomText style={styles.amount}>${amountUSD}</CustomText>
        <CustomText style={styles.amountValue}>
          {amountCrypto}${currency}
        </CustomText>
      </View>
    </TouchableOpacity>
    <View style={styles.divider} />
  </>
);
const PortfolioScreen: React.FC<RootStackScreenProps<"Portfolio">> = () => {
  const navigation = useNavigation();
  const navigateToDetail = () => {
    // @ts-ignore-next-line
    navigation.navigate("AssetDetail");
  };

  return (
    <ScreenLayout
      scrollable
      showHeader
      title=""
      flexibleHeader
      headerRight={
        <View style={styles.headerRight}>
          <CustomText style={styles.headerText}>Portfolio</CustomText>
          <TouchableOpacity style={styles.more}>
            <MoreIcon />
          </TouchableOpacity>
        </View>
      }
    >
      <CustomText style={styles.holdings}>Total holdings</CustomText>
      <CustomText style={styles.amount1}>$1,567.88</CustomText>
      <View style={styles.growthContainer}>
        <CustomText style={styles.growth}>
          + 22.5% growth in 24 hours
        </CustomText>
      </View>
      <CustomText style={styles.holdingAsset}>
        You hold a total of 4 assets
      </CustomText>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Trade", { tab: "buy" })}
          style={styles.btn}
        >
          <MoneyRecive size="24" color="#3861FB" />
          <CustomText style={styles.btnText}>Buy</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Trade", { tab: "sell" })}
          style={styles.btn}
        >
          <Export size="24" color="#3861FB" />
          <CustomText style={styles.btnText}>Withdraw</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ReceiveCrypto")}
          style={styles.btn}
        >
          <Import size="24" color="#3861FB" />
          <CustomText style={styles.btnText}>Deposit</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerFull} />
      <View style={styles.assetHeader}>
        <View style={styles.assetTitleContainer}>
          <CustomText style={styles.assetText}>Assets</CustomText>
          <View style={styles.assetCountContainer}>
            <CustomText style={styles.assetCount}>9</CustomText>
          </View>
        </View>
        <TouchableOpacity style={styles.toggleTitle}>
          <EyeSlash size={20} color="black" />
          <CustomText style={styles.toggleText}>Hide 0 Balance</CustomText>
        </TouchableOpacity>
      </View>
      <CustomInput
        icon={<SearchNormal1 size={20} color="#979797" />}
        style={styles.searchInput}
        placeholder="Search for a token"
      />
      <AssetItem
        image={BitcoinImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="BTC"
        title="Bitcoin"
        onPress={navigateToDetail}
        noPercentage
      />
      <AssetItem
        image={LTCImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="LTC"
        title="Litecoin"
        onPress={navigateToDetail}
        noPercentage
      />
      <AssetItem
        image={TronImage}
        amountUSD={20.44}
        amountCrypto={0.007}
        currency="TRX"
        title="Tron"
        onPress={navigateToDetail}
        noPercentage
      />
    </ScreenLayout>
  );
};

export default PortfolioScreen;

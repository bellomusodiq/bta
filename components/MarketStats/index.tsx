import { CurrencyToAbbreviation } from "currency-to-abbreviation";
import {
  ArrowRight2,
  MaximizeCircle,
  MoneySend,
  StatusUp,
  Timer,
} from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { MarketStatsItemProps } from "./types";

const MarketStatsItem: React.FC<MarketStatsItemProps> = ({
  icon,
  title,
  amount,
  url,
  noDivider,
}) => (
  <View style={styles.marketStatsItemContainer}>
    <View style={styles.marketStatsItem}>
      <View style={styles.iconContainer}>{icon}</View>
      <CustomText style={styles.marketStatsItemTitle}>{title}</CustomText>
      {amount && <CustomText style={styles.amount}>{amount}</CustomText>}
      {url && (
        <TouchableOpacity style={styles.urlContainer}>
          <CustomText style={styles.url}>{url}</CustomText>
          <ArrowRight2 size={RFValue(20)} color="#3861FB" />
        </TouchableOpacity>
      )}
    </View>
    {!noDivider && <View style={styles.divider} />}
  </View>
);

const MarketStats: React.FC<{ marketStats: any; website: string }> = ({
  marketStats,
  website,
}) => {

  const getAmount = (input: number) => {
    let value = input;
    if (input < 0) {
      value = -1 * input;
    }
    if (typeof value !== "number") {
      value = 0;
    }
    return `${input < 0 ? "-" : ""}${CurrencyToAbbreviation({
      inputNumber: value,
    })}`;
  };
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Market stats</CustomText>
      <View style={styles.websiteContainer}>
        <MarketStatsItem
          icon={<MoneySend size={RFValue(24)} color="#3861FB" variant="Bold" />}
          title="Market capitalization"
          amount={getAmount(marketStats?.[0]?.market_cap)}
        />
        <MarketStatsItem
          icon={<Timer size={RFValue(24)} color="#3861FB" variant="Bulk" />}
          title="24hr volume"
          amount={getAmount(marketStats?.[0]?.market_cap_change_24h)}
        />
        <MarketStatsItem
          icon={
            <MaximizeCircle size={RFValue(24)} color="#3861FB" variant="Bulk" />
          }
          title="Circulating supply"
          amount={getAmount(marketStats?.[0]?.total_supply)}
        />
        <MarketStatsItem
          icon={<StatusUp size={RFValue(24)} color="#3861FB" variant="Bold" />}
          title="All time high"
          amount={getAmount(marketStats?.[0]?.ath)}
        />
        <MarketStatsItem
          icon={<MoneySend size={RFValue(24)} color="#3861FB" />}
          title="Explorer"
          url={website}
          noDivider
        />
      </View>
    </View>
  );
};

export default MarketStats;

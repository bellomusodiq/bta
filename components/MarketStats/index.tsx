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

const MarketStats: React.FC = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Market stats</CustomText>
      <View style={styles.marketStatsContainer}>
        <MarketStatsItem
          icon={<MoneySend size={RFValue(24)} color="#3861FB" variant="Bold" />}
          title="Market capitalization"
          amount="$6bn"
        />
        <MarketStatsItem
          icon={<Timer size={RFValue(24)} color="#3861FB" variant="Bulk" />}
          title="24hr volume"
          amount="$0.5bn"
        />
        <MarketStatsItem
          icon={
            <MaximizeCircle size={RFValue(24)} color="#3861FB" variant="Bulk" />
          }
          title="Circulating supply"
          amount="$92.5bn"
        />
        <MarketStatsItem
          icon={<StatusUp size={RFValue(24)} color="#3861FB" variant="Bulk" />}
          title="All time high"
          amount="$0.23"
        />
        <MarketStatsItem
          icon={<MoneySend size={RFValue(24)} color="#3861FB" />}
          title="Explorer"
          url="tronscan.io"
          noDivider
        />
      </View>
    </View>
  );
};

export default MarketStats;

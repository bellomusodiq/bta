import React from "react";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { HistoryStackScreenProps } from "../../types";
import styles from "./styles";
import TRXImage from "../../assets/images/TRX.png";
import { Image, TouchableOpacity, View } from "react-native";
import TransactionStatus from "../../components/TransactionStatus";
import { TransactonDetailItemProps } from "./types";
import { DocumentCopy } from "iconsax-react-native";

const TransactionDetailItem: React.FC<TransactonDetailItemProps> = ({
  title,
  value,
  canCopy,
}) => (
  <View style={styles.transactionDetailItemContainer}>
    <View style={styles.divider} />
    <View style={styles.transactionDetailItem}>
      <View style={styles.textContainer}>
        <CustomText style={styles.transactionDetailTitle}>{title}</CustomText>
        <CustomText style={styles.transactionDetailValue}>{value}</CustomText>
      </View>
      {canCopy && (
        <TouchableOpacity style={styles.copyButton}>
          <DocumentCopy size={20} color="#979797" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const TransactionDetailScreen: React.FC<
  HistoryStackScreenProps<"TransactionDetail">
> = () => {
  return (
    <ScreenLayout scrollable showHeader showShadow title="Transaction details">
      <View style={styles.container}>
        <Image source={TRXImage} style={styles.image} resizeMode="cover" />
        <CustomText style={styles.amount}>-2.09TRX</CustomText>
        <TransactionStatus title="PROCESSING" statusType="pending" />
        <View style={styles.margin} />
        <TransactionDetailItem title="Transaction type" value="Sell TRX" />
        <TransactionDetailItem title="Value" value="$0.13 (2 TRX) " />
        <TransactionDetailItem title="Confirmations" value="3 of 25" />
        <TransactionDetailItem
          title="Withdrawal account"
          value="ACCESSGH - 0692382393."
        />
        <TransactionDetailItem title="From" value="TRX wallet" />
        <TransactionDetailItem
          title="Transaction id"
          value="91fb705770fd068269e2f644aad32c6c561fee789825f19761df768be00559"
          canCopy
        />
        <TouchableOpacity style={styles.explorerButton}>
          <CustomText style={styles.explorerText}>
            View Transaction on explorer
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default TransactionDetailScreen;

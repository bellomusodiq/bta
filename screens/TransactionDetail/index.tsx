import React from "react";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { HistoryStackScreenProps } from "../../types";
import styles from "./styles";
import { Image, TouchableOpacity, View } from "react-native";
import TransactionStatus from "../../components/TransactionStatus";
import { TransactonDetailItemProps } from "./types";
import { DocumentCopy } from "iconsax-react-native";
import { coinImage } from "../../consts/images";
import Copy from "../../components/Copy";

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
        <Copy text={value} style={styles.copyButton}>
          <DocumentCopy size={20} color="#979797" />
        </Copy>
      )}
    </View>
  </View>
);

const TransactionDetailScreen: React.FC<
  HistoryStackScreenProps<"TransactionDetail">
> = ({ route, navigation }) => {
  const { params } = route;

  const cryptoCurrency =
    params?.item.cryptoCurrency ||
    params?.item.cryptoSymbol ||
    params?.item.currency;

  const tokenAmount =
    params?.item.crypto ||
    params?.item.tokenAmount ||
    params?.item.cryptoValue ||
    params?.item.cryptoAmount;

  const usdAmount = params?.item.usdAmount || params?.item.usd;

  const _id = params?.item.txid || params?.item.uniq;

  return (
    <ScreenLayout
      scrollable
      showHeader
      onBackClick={() =>
        navigation.replace("HistoryHome", {
          tab: params.tab,
        })
      }
      showShadow
      title="Transaction details"
    >
      <View style={styles.container}>
        <Image
          source={coinImage[cryptoCurrency]}
          style={styles.image}
          resizeMode="cover"
        />
        <CustomText style={styles.amount}>{`${
          params?.type === "out" ? "-" : ""
        }${tokenAmount} ${cryptoCurrency}`}</CustomText>
        <TransactionStatus
          title={params?.item.status.toUpperCase()}
          statusType={params?.item.status}
        />
        <View style={styles.margin} />
        <TransactionDetailItem
          title="Transaction type"
          value={`${params?.desc} ${cryptoCurrency}`}
        />
        <TransactionDetailItem
          title="Value"
          value={`$${usdAmount} (${tokenAmount} ${cryptoCurrency})`}
        />
        {params?.item.status === "pending" && params?.item?.confirmations && (
          <TransactionDetailItem
            title="Confirmations"
            value={params?.item.confirmations}
          />
        )}
        {(params?.desc === "Buy" || params?.desc === "Sell") && (
          <TransactionDetailItem
            title={
              params?.desc === "Buy" ? "Deposit account" : "Withdrawal account"
            }
            value={params?.item.methodId || params?.item.paymenthodMethodId}
          />
        )}
        {params?.desc === "Sent" && (
          <TransactionDetailItem
            title="From"
            value={`${cryptoCurrency} wallet`}
          />
        )}
        {(params?.desc === "Sent" || params?.desc === "Received") && (
          <TransactionDetailItem
            title="To"
            value={params?.item.recipient}
            canCopy
          />
        )}
        <TransactionDetailItem title="Transaction id" value={_id} canCopy />
        {(params.desc === "Sent" || params.desc === "Received") && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("History", {
                screen: "HistoryHome",
                params: { tab: route.params.tab },
              })
            }
            style={styles.explorerButton}
          >
            <CustomText style={styles.explorerText}>
              View Transaction on explorer
            </CustomText>
          </TouchableOpacity>
        )}
      </View>
    </ScreenLayout>
  );
};

export default TransactionDetailScreen;

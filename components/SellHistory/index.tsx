import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, View } from "react-native";
import HistoryItem from "../HistoryItem";
import styles from "./styles";
import EmptyTransactionsImage from "../../assets/images/empty-transactions.png";
import CustomText from "../CustomText";

const SellHistory: React.FC<{ data: any; type: string; arrowType: string }> = ({
  data,
  type,
  arrowType
}) => {
  const navigation = useNavigation();

  const formatDate = (date: any) => {
    const newDate = new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return newDate;
  };
  const renderItem = ({ item }: { item: any }) => (
    <HistoryItem
      type={arrowType}
      title={`${type} ${
        item.cryptoCurrency || item.cryptoSymbol || item.currency
      }`}
      usdAmount={item.usdAmount || item.usd}
      token={item.cryptoCurrency || item.cryptoSymbol || item.currency}
      tokenAmount={
        item.crypto || item.tokenAmount || item.cryptoValue || item.cryptoAmount
      }
      date={formatDate(item.date || item.createdOn)}
      // @ts-ignore-next-line
      onPress={() => navigation.navigate("TransactionDetail")}
      status={item.status}
    />
  );
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Image
            // resizeMode="contain"
            source={EmptyTransactionsImage}
            style={styles.image}
          />
          <CustomText style={styles.text}>
            Your transactions will show here
          </CustomText>
        </View>
      }
    />
  );
};

export default SellHistory;

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import HistoryItem from "../HistoryItem";
import { HistoryItemProps } from "../HistoryItem/types";
import styles from "./styles";

const data: HistoryItemProps[] = [
  {
    title: "Sold LTC",
    usdAmount: "1,200.65",
    token: "LTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sold LTC",
    usdAmount: "1,200.65",
    token: "LTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sold LTC",
    usdAmount: "1,200.65",
    token: "LTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sold LTC",
    usdAmount: "1,200.65",
    token: "LTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
];

const SellHistory: React.FC = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: HistoryItemProps }) => (
    <HistoryItem
      type="out"
      title={item.title}
      usdAmount={item.usdAmount}
      token={item.token}
      tokenAmount={item.tokenAmount}
      date={item.date}
      // @ts-ignore-next-line
      onPress={() => navigation.navigate("TransactionDetail")}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
    />
  );
};

export default SellHistory;

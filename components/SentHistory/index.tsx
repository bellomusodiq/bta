import React from "react";
import { FlatList, View } from "react-native";
import HistoryItem from "../HistoryItem";
import { HistoryItemProps } from "../HistoryItem/types";
import styles from "./styles";

const data: HistoryItemProps[] = [
  {
    title: "Sent BTC",
    usdAmount: "1,200.65",
    token: "BTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sent BTC",
    usdAmount: "1,200.65",
    token: "BTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sent BTC",
    usdAmount: "1,200.65",
    token: "BTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
  {
    title: "Sent BTC",
    usdAmount: "1,200.65",
    token: "BTC",
    date: "July 22, 2022",
    tokenAmount: 12.45,
  },
];

const SentHistory: React.FC = () => {
  const renderItem = ({ item }: { item: HistoryItemProps }) => (
    <HistoryItem
      type="out"
      title={item.title}
      usdAmount={item.usdAmount}
      token={item.token}
      tokenAmount={item.tokenAmount}
      date={item.date}
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

export default SentHistory;

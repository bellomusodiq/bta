import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { TrendFilterItemProps } from "./types";

const TrendFilterItem: React.FC<TrendFilterItemProps> = ({
  title,
  onPress,
  active,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.trendFilterItem,
      { borderColor: active ? "#3861FB" : "#F0F0F0" },
    ]}
  >
    <CustomText
      style={[
        styles.trendFilterItemText,
        { color: active ? "#3861FB" : "#979797" },
      ]}
    >
      {title}
    </CustomText>
  </TouchableOpacity>
);

const TrendFilter: React.FC = () => {
  const [currentTrend, setCurrentTrend] = useState<string>("15m");
  const data: TrendFilterItemProps[] = [
    {
      title: "15m",
    },
    {
      title: "1hr",
    },
    {
      title: "1day",
    },
    {
      title: "1month",
    },
    {
      title: "More",
    },
  ];
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TrendFilterItem
          onPress={() => setCurrentTrend(item.title)}
          title={item.title}
          active={currentTrend === item.title}
        />
      )}
    />
  );
};

export default TrendFilter;

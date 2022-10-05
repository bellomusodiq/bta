import React, { useEffect, useState } from "react";
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

const TrendFilter: React.FC<{ onSetTrend: (currentTrend: string) => {} }> = ({
  onSetTrend,
}) => {
  const [currentTrend, setCurrentTrend] = useState<string>("daily");
  const data: TrendFilterItemProps[] = [
    {
      title: "daily",
    },
    {
      title: "weekly",
    },
    {
      title: "monthly",
    },
    {
      title: "yearly",
    },
  ];

  useEffect(() => {
    onSetTrend(currentTrend);
  }, [currentTrend]);
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

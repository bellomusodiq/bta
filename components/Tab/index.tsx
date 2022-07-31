import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { TabItemProps, TabProps } from "./types";

const TabItem: React.FC<TabItemProps> = ({ title, onPress, active }) => (
  <TouchableOpacity onPress={onPress} style={styles.tabItem}>
    <CustomText
      style={[styles.tabItemTitle, { color: active ? "#3861FB" : "#979797" }]}
    >
      {title}
    </CustomText>
    {active && <View style={styles.indicator} />}
  </TouchableOpacity>
);

const Tab: React.FC<TabProps> = ({ tabs, activeIndex, onTabChange }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        style={styles.flatList}
        data={tabs}
        renderItem={({ item, index }) => (
          <TabItem
            onPress={() => onTabChange(index)}
            active={index === activeIndex}
            title={item.title}
          />
        )}
      />
      <View style={styles.divider} />
    </View>
  );
};

export default Tab;

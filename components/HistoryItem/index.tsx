import { MoneyRecive, MoneySend } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { HistoryItemProps } from "./types";

const HistoryItem: React.FC<HistoryItemProps> = ({
  type,
  usdAmount,
  token,
  tokenAmount,
  title,
  date,
  onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.iconContainer}>
      {type === "out" ? (
        <MoneySend size="20" color="#27C27A" />
      ) : (
        <MoneyRecive size="20" color="#27C27A" />
      )}
    </View>
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.usdAmount}>${usdAmount}</CustomText>
      </View>
      <View style={styles.dateContainer}>
        <CustomText style={styles.tokenAmount}>
          {tokenAmount} {token}
        </CustomText>
        <CustomText style={styles.date}>{date}</CustomText>
      </View>
    </View>
  </TouchableOpacity>
);

export default HistoryItem;

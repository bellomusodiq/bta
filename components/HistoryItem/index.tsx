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
  onPress,
  status,
}) => {
  let color = "#27C27A";
  let backgroundColor = "#EFFCF6";
  if (status === "pending") {
    color = "#EBB101";
    backgroundColor = "#FFF9E9";
  }
  if (status === "failed") {
    color = "#FF5C5C";
    backgroundColor = "#FFF3F3";
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor }]}>
        {type === "out" ? (
          <MoneySend size="20" color={color} />
        ) : (
          <MoneyRecive size="20" color={color} />
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
};

export default HistoryItem;

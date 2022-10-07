import React from "react";
import { View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { TransactionStatusProps } from "./types";

const TransactionStatus: React.FC<TransactionStatusProps> = ({
  title,
  statusType,
}) => {
  let backgroundColor = "#EFFCF6";
  let color = "#27C27A";
  if (statusType === "pending") {
    backgroundColor = "#FFF9E9";
    color = "#EBB101";
  }
  if (statusType === "failed") {
    color = "#FF5C5C";
    backgroundColor = "#FFF3F3";
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <CustomText style={[styles.text, { color }]}>{title}</CustomText>
    </View>
  );
};

export default TransactionStatus;

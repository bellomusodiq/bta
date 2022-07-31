import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { TradeItemProps } from "./types";

const TradeItem: React.FC<TradeItemProps> = ({
  image,
  title,
  price,
  rate,
  onPress,
  tradeType,
}) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} resizeMode="contain" />
    <View style={styles.priceContainer}>
      <CustomText style={styles.priceTitle}>{title}</CustomText>
      <CustomText style={styles.price}>{price}</CustomText>
    </View>
    <View style={styles.rateContainer}>
      <CustomText style={styles.rateTitle}>Rate</CustomText>
      <CustomText style={styles.rate}>{rate}</CustomText>
    </View>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CustomText style={styles.buttonText}>
        {tradeType === "buy" ? "Buy" : "Sell"}
      </CustomText>
    </TouchableOpacity>
  </View>
);

export default TradeItem;

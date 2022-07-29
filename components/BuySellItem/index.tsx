import { ArrowRight2, MoneyRecive, MoneySend } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { BuySellItemProps } from "./types";

const BuySellItem: React.FC<BuySellItemProps> = ({ type, title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    {type === "buy" ? (
      <MoneyRecive size={RFValue(38)} color="#3861FB" variant="Bulk" />
    ) : (
      <MoneySend size={RFValue(38)} color="#3861FB" variant="Bulk" />
    )}
    <View style={styles.textContainer}>
      <CustomText style={styles.title}>
        {type === "buy" ? "Buy" : "Sell"}
      </CustomText>
      <CustomText style={styles.desc}>
        {type === "buy"
          ? `Insantly purchase ${title} to your wallet`
          : `Sell your ${title} for cash`}
      </CustomText>
    </View>
    <ArrowRight2
      style={{ marginTop: 10 }}
      size={RFValue(20)}
      color="black"
      variant="Outline"
    />
  </TouchableOpacity>
);

export default BuySellItem;

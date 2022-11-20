import { ArrowRight2, ReceiptAdd, ReceiptMinus } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { BuySellItemProps } from "./types";

const BuySellItem: React.FC<BuySellItemProps> = ({ type, title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    {type === "buy" ? (
      <ReceiptAdd size={RFValue(28)} color="#3861FB" variant="Linear" />
    ) : (
      <ReceiptMinus size={RFValue(28)} color="#3861FB" variant="Linear" />
    )}
    <View style={styles.textContainer}>
      <CustomText style={styles.title}>
        {type === "buy" ? "Instant Buy" : "Instant Sell"}
      </CustomText>
      <CustomText style={styles.desc}>
        {type === "buy"
          ? `Purchase ${title} to your wallet`
          : `Sell your ${title} for cash`}
      </CustomText>
    </View>
    <ArrowRight2
      size={RFValue(20)}
      color="black"
      variant="Outline"
    />
  </TouchableOpacity>
);

export default BuySellItem;

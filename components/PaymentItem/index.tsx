import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { PaymentItemProps } from "./types";
import CustomText from "../CustomText";
import { ArrowRight2 } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const PaymentItem: React.FC<PaymentItemProps> = ({
  icon,
  title,
  description,
  showArror,
  onPress,
  active,
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      {
        borderColor: active ? "#3861FB" : "#F0F0F0",
      },
    ]}
    onPress={onPress}
  >
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.textContainer}>
      <CustomText style={styles.title} numberOfLines={1} lineBreakMode="tail">
        {title}
      </CustomText>
      <CustomText
        numberOfLines={1}
        lineBreakMode="tail"
        style={styles.description}
      >
        {description}
      </CustomText>
    </View>
    <View style={styles.arrowContainer}>
      {showArror && <ArrowRight2 size={RFValue(18)} color="#000" />}
    </View>
  </TouchableOpacity>
);

export default PaymentItem;

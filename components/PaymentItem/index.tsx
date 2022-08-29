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
  unavailable,
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
    <View
      style={[
        styles.textContainer,
        {
          justifyContent: !description ? "center" : "flex-start",
        },
      ]}
    >
      <CustomText
        style={[
          styles.title,
          {
            color: unavailable ? "#979797" : "black",
          },
        ]}
        numberOfLines={1}
        lineBreakMode="tail"
      >
        {title}
      </CustomText>
      {description && (
        <CustomText
          numberOfLines={1}
          lineBreakMode="tail"
          style={styles.description}
        >
          {description}
        </CustomText>
      )}
    </View>
    {!unavailable ? (
      <View style={styles.arrowContainer}>
        {showArror && <ArrowRight2 size={RFValue(18)} color="#000" />}
      </View>
    ) : (
      <View style={styles.unavailableContainer}>
        <CustomText style={styles.unavailable}>Unavailable</CustomText>
      </View>
    )}
  </TouchableOpacity>
);

export default PaymentItem;

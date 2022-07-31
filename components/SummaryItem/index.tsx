import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import styles from "./styles";
import { SummaryItemProps } from "./types";

const SummaryItem: React.FC<SummaryItemProps> = ({
  title,
  value,
  valueBold,
  onClick,
  noDivider,
}) => (
  <>
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      {onClick ? (
        <TouchableOpacity style={styles.button} onPress={onClick}>
          <CustomText style={[styles.value, { color: "#3861FB" }]}>
            {value}
          </CustomText>
        </TouchableOpacity>
      ) : (
        <CustomText
          style={[
            styles.value,
            {
              fontFamily: valueBold ? "Inter_600SemiBold" : "Inter_400Regular",
              fontSize: valueBold ? RFValue(16) : RFValue(14),
            },
          ]}
        >
          {value}
        </CustomText>
      )}
    </View>
    {!noDivider && <View style={styles.divider} />}
  </>
);

export default SummaryItem;

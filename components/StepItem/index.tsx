import React from "react";
import { View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { StepItemProps } from "./types";

const StepItem: React.FC<StepItemProps> = ({ title, children }) => (
  <View style={styles.container}>
    <CustomText style={styles.title}>{title}</CustomText>
    <View style={styles.body}>{children}</View>
  </View>
);

export default StepItem;

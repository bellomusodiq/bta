import React from "react";
import { Text, TextProps } from "react-native";
import styles from "./styles";

const CustomText: React.FC<TextProps> = ({ style, ...props }) => (
  <Text style={[styles.text, style]} {...props}>
    {props.children}
  </Text>
);

export default CustomText;

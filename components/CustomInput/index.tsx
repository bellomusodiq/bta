import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

const CustomInput: React.FC<{ icon?: JSX.Element } & TextInputProps> = ({
  icon,
  ...props
}) => (
  <View style={styles.container}>
    {icon && <View style={styles.iconContainer}>{icon}</View>}
    <TextInput {...props} style={styles.input} placeholderTextColor="#979797" />
  </View>
);

export default CustomInput;

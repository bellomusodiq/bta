import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

const CustomInput: React.FC<
  {
    icon?: JSX.Element;
    rightComponent?: JSX.Element;
    inputColor?: string;
  } & TextInputProps
> = ({ icon, rightComponent, inputColor, ...props }) => (
  <View style={styles.container}>
    {icon && <View style={styles.iconContainer}>{icon}</View>}
    <TextInput
      {...props}
      style={[styles.input, { color: inputColor }]}
      placeholderTextColor="#979797"
    />
    {rightComponent && (
      <View style={styles.rightContainer}>{rightComponent}</View>
    )}
  </View>
);

export default CustomInput;

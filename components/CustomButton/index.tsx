import React from "react";
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";

const CustomButton: React.FC<
  TouchableOpacityProps & { buttonText?: TextStyle; loading?: boolean }
> = ({ style, buttonText, ...props }) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.footerButton,
      {
        backgroundColor: !props.disabled ? "#3861FB" : "#979797",
      },
      style,
    ]}
  >
    {props.loading ? (
      <ActivityIndicator size="small" color="white" />
    ) : (
      <CustomText style={[styles.footerButtonText, buttonText]}>
        {props.children}
      </CustomText>
    )}
  </TouchableOpacity>
);

export default CustomButton;

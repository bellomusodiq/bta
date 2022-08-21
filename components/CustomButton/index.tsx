import React from "react";
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";

const CustomButton: React.FC<
  TouchableOpacityProps & { buttonText?: TextStyle }
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
    <CustomText style={[styles.footerButtonText, buttonText]}>
      {props.children}
    </CustomText>
  </TouchableOpacity>
);

export default CustomButton;

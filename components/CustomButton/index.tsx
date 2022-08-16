import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";

const CustomButton: React.FC<TouchableOpacityProps> = (props) => (
  <TouchableOpacity
    {...props}
    style={[
      styles.footerButton,
      {
        backgroundColor: !props.disabled ? "#3861FB" : "#979797",
      },
    ]}
  >
    <CustomText style={styles.footerButtonText}>{props.children}</CustomText>
  </TouchableOpacity>
);

export default CustomButton;

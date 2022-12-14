import React, { useState } from "react";
import { PortfolioCardProps } from "./types";
import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { Eye, EyeSlash } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const PortfolioCard: React.FC<PortfolioCardProps> = ({ balance }) => {
  const [showBalance, setShowBalance] = useState<boolean>(true);

  const toggleBalance = () => setShowBalance(!showBalance);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <CustomText style={styles.title}>Portfolio balance</CustomText>
        <CustomText style={styles.balance}>
          {showBalance ? `$${balance}` : "****"}
        </CustomText>
      </View>
      <TouchableOpacity style={styles.eyeIcon} onPress={toggleBalance}>
        {!showBalance ? (
          <Eye size={RFValue(14)} color="white" variant="Bold" />
        ) : (
          <EyeSlash size={RFValue(14)} color="white" variant="Bold" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PortfolioCard;

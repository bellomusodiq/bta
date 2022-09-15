import { ArrowRight2 } from "iconsax-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../CustomText";
import UpTrendIcon from "../icons/uptrend-icon";
import styles from "./styles";
import { AssetItemProps } from "./types";

const AssetItem: React.FC<AssetItemProps> = ({
  title,
  amountCrypto,
  amountUSD,
  image,
  currency,
  onPress,
  hideTrend,
  showArrow,
  percentageChange = 0,
  noPercentage,
  tokenPrice,
}) => (
  <>
    <TouchableOpacity onPress={onPress} style={styles.assetItemContainer}>
      <Image
        source={image}
        style={styles.assetImage}
        resizeMode="contain"
        resizeMethod="scale"
      />
      <View style={styles.nameContainer}>
        <CustomText style={styles.assetTitle}>{title}</CustomText>
        <CustomText style={styles.assetAbbr}>
          {tokenPrice || currency}
          {"   "}
          {!noPercentage && (
            <CustomText
              style={{
                color: percentageChange >= 0 ? "#25D366" : "#FF5C5C",
              }}
            >
              {percentageChange === 0
                ? "+0.0"
                : `${percentageChange >= 0 ? "+" : ""}${percentageChange}`}
              <CustomText
                style={{
                  fontSize: 12,
                }}
              >
                %
              </CustomText>
            </CustomText>
          )}
        </CustomText>
      </View>
      {!showArrow ? (
        <View style={styles.valueContainer}>
          <CustomText style={styles.amount}>
            {hideTrend ? `${amountCrypto} ${currency}` : `$${amountUSD}`}
          </CustomText>
          <CustomText style={styles.amountValue}>
            {hideTrend ? `$${amountUSD}` : `${amountCrypto} ${currency}`}
          </CustomText>
        </View>
      ) : (
        <View style={styles.arrowContainer}>
          <ArrowRight2 size={RFValue(20)} color="#000" />
        </View>
      )}
    </TouchableOpacity>
    <View style={styles.divider} />
  </>
);

export default AssetItem;

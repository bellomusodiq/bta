import React, { useState } from "react";
import { Image, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { ManageAssetItemProps } from "./types";
import SwitchToggle from "react-native-switch-toggle";
import { RFValue } from "react-native-responsive-fontsize";

const ManageAssetItem: React.FC<ManageAssetItemProps> = ({
  title,
  active,
  confirmations,
  toggleOn,
  image,
}) => {
  const [on, setOn] = useState<boolean>(true);
  return (
    <>
      <View style={styles.container}>
        <Image resizeMode="contain" source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.confirmations}>
            Required confirmations: {confirmations}
          </CustomText>
        </View>
        <SwitchToggle
          switchOn={active}
          onPress={toggleOn}
          circleColorOff="#6e6e6e"
          circleColorOn="#FFFFFF"
          backgroundColorOn="#3861FB"
          backgroundColorOff="#C4C4C4"
          containerStyle={{
            marginTop: 16,
            width: 35,
            height: 22,
            borderRadius: 22,
            padding: 2,
          }}
          circleStyle={{
            width: 20,
            height: 20,
            borderRadius: 25,
          }}
        />
      </View>
      <View style={styles.divider} />
    </>
  );
};

export default ManageAssetItem;

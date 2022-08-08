import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { ProfileItemProps, ProfileItemsProps } from "./types";
import SwitchToggle from "react-native-switch-toggle";
import { ArrowRight2 } from "iconsax-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const ProfileItem: React.FC<ProfileItemProps> = ({
  icon,
  title,
  isToggle,
  active,
  onPress,
  onToggle,
  lastItem,
}) => {
  const children = (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>{icon}</View>
      <CustomText style={styles.itemText}>{title}</CustomText>
      {isToggle ? (
        <SwitchToggle
          // @ts-ignore-next-line
          switchOn={active}
          // @ts-ignore-next-line
          onPress={onToggle}
          circleColorOff="#6e6e6e"
          circleColorOn="#FFFFFF"
          backgroundColorOn="#3861FB"
          backgroundColorOff="#C4C4C4"
          containerStyle={{
            width: 45,
            height: 25,
            borderRadius: 25,
            padding: 2,
          }}
          circleStyle={{
            width: 23,
            height: 23,
            borderRadius: 25,
          }}
        />
      ) : (
        <ArrowRight2 size={RFValue(24)} color="#000" />
      )}
    </View>
  );
  return isToggle ? (
    <View style={styles.container}>
      {children}
      {!lastItem && <View style={styles.divider} />}
    </View>
  ) : (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
      {!lastItem && <View style={styles.divider} />}
    </TouchableOpacity>
  );
};

const ProfileItems: React.FC<ProfileItemsProps> = ({ data, title }) => {
  return (
    <View style={styles.profileItems}>
      <CustomText style={styles.title}>{title}</CustomText>
      {data.map((item, i) => (
        <ProfileItem
          title={item.title}
          active={item.active}
          icon={item.icon}
          isToggle={item.isToggle}
          onPress={item.onPress}
          onToggle={item.onToggle}
          lastItem={i === data.length - 1}
          firstItem={item.firstItem}
        />
      ))}
    </View>
  );
};

export default ProfileItems;

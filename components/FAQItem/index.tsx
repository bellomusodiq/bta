import { ArrowDown2, ArrowUp2 } from "iconsax-react-native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import styles from "./styles";
import { FAQItemProps } from "./types";

const FAQItem: React.FC<FAQItemProps> = ({ title, description }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setOpen(!open)}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        {open ? (
          <ArrowUp2 size={20} color="#3861FB" />
        ) : (
          <ArrowDown2 size={20} color="#000" />
        )}
      </View>
      {open ? (
        <>
          <View style={styles.divider} />
          <CustomText style={styles.description}>{description}</CustomText>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default FAQItem;

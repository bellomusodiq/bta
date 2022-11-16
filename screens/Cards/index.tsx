import { ArrowLeft, Cards } from "iconsax-react-native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import styles from "./styles";
import CardsImage from "../../assets/images/cards.png";
import CustomButton from "../../components/CustomButton";
import { RootStackScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

const CardsScreen: React.FC<RootStackScreenProps<"Cards">> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout SafeAreaBackground="white">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={RFValue(24)} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Cards size={RFValue(24)} color="black" variant="Bold" />
          <CustomText style={styles.title}>Cards</CustomText>
        </View>
      </View>
      <Image source={CardsImage} style={styles.image} resizeMode="contain" />
      <CustomText style={styles.bodyTitle}>
        One card for online purchases
      </CustomText>
      <CustomText style={styles.bodyText}>
        Request a virtual card instantly. Use it anywhere debit cards are
        accepted online.
      </CustomText>
      <CustomButton>Create card</CustomButton>
    </ScreenLayout>
  );
};

export default CardsScreen;

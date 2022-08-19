import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SelfieImage from "../../assets/images/selfie.png";
import IdImage from "../../assets/images/id.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const KYCInformationScreen: React.FC<
  RootStackScreenProps<"KYCInformationReview">
> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout showHeader title="Review information" showShadow scrollable>
      <CustomText style={styles.title}>
        Welldone Emmanuel, kindly confirm your details below before submitting.
      </CustomText>
      <View style={styles.imagesContainer}>
        <Image source={SelfieImage} style={styles.image} resizeMethod="scale" />
        <Image source={IdImage} style={styles.image} resizeMethod="scale" />
      </View>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>ID type</CustomText>
        <CustomInput value="Ghana card" />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>ID No / Ref</CustomText>
        <CustomInput value="0003805556" />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Full name</CustomText>
        <CustomInput value="Bannor Antwiwaa emmanuel" />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>GhanaPostGPS code</CustomText>
        <CustomInput value="GA086721" />
      </View>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Date of birth</CustomText>
        <CustomInput value="Thur August 20, 1992." />
      </View>
      <View style={styles.divider2} />
      <TouchableOpacity style={[styles.button, styles.editButton]}>
        <CustomText style={styles.editText}>EDIT</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={[styles.button, styles.submitButton]}
      >
        <CustomText style={styles.submitText}>SUBMIT</CustomText>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default KYCInformationScreen;

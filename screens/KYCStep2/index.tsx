import { useNavigation } from "@react-navigation/native";
import { Calendar } from "iconsax-react-native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const KYCStep2Screen: React.FC<RootStackScreenProps<"KYCStep2">> = () => {
  const [picker, setPicker] = useState<string | null>();
  const [dob, setDob] = useState<Date>(new Date());
  const [ghanaCard, setGhanaCard] = useState<Date>(new Date());
  const navigation = useNavigation();

  return (
    <ScreenLayout scrollable title="Step 2" showHeader showShadow>
      <View style={styles.progressContainer}>
        <CustomText style={styles.kycText}>KYC progress</CustomText>
        <View style={styles.progress}>
          <View style={[styles.progressCompleted, { width: "33%" }]} />
        </View>
        <CustomText style={styles.progressText}>1/3 done 👏</CustomText>
      </View>
      <View style={styles.divider} />
      <CustomText style={styles.title}>Enter Ghana card info</CustomText>
      <CustomText style={styles.subTitle}>
        Enter your information exactly how it is displayed on your Ghana card
        ID.
      </CustomText>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter your first name" />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter your last name" />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter other names" />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter Ghana card No" />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter GhanaPostGPS code" />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.datePickerContainer}>
          <CustomText style={styles.datePickerText}>
            Set date of birth
          </CustomText>
          <TouchableOpacity
            onPress={() => setPicker("dob")}
            style={styles.datePicker}
          >
            <Calendar size={RFValue(20)} color="#292D32" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default KYCStep2Screen;

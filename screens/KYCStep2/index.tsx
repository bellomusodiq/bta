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
import DateTimePickerModal from "react-native-modal-datetime-picker";

const KYCStep2Screen: React.FC<RootStackScreenProps<"KYCStep2">> = () => {
  const [picker, setPicker] = useState<string | null>();
  const [dob, setDob] = useState<Date>();
  const [ghanaCard, setGhanaCard] = useState<Date>();
  const navigation = useNavigation();

  const handleConfirm = (date: Date) => {
    if (picker === "dob") {
      setDob(date);
    } else {
      setGhanaCard(date);
    }
    setPicker(null);
  };

  const hideDatePicker = () => {
    setPicker(null);
  };

  const disabled = Boolean(dob || ghanaCard);

  return (
    <ScreenLayout
      scrollable
      title="Step 2"
      showHeader
      showShadow
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("KYCStep3")}
            disabled={disabled}
            style={[
              styles.footerButton,
              {
                backgroundColor: !disabled ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>SAVE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <DateTimePickerModal
        isVisible={Boolean(picker)}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
            {dob?.toDateString() || "Set date of birth"}
          </CustomText>
          <TouchableOpacity
            onPress={() => setPicker("dob")}
            style={styles.datePicker}
          >
            <Calendar size={RFValue(20)} color="#292D32" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.datePickerContainer}>
          <CustomText style={styles.datePickerText}>
            {ghanaCard?.toDateString() || "Ghana card expiry date"}
          </CustomText>
          <TouchableOpacity
            onPress={() => setPicker("ghanaCard")}
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

import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import EllipseIcon from "../../components/icons/elipse-icon";
import { useAppSelector } from "../../store";

const KYCInfoScreen: React.FC<RootStackScreenProps<"KYCBegin">> = () => {
  const navigation = useNavigation();
  return (
    <ScreenLayout
      showHeader
      title="Verify account"
      scrollable
      showShadow
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("KYCStep1")}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>
              BEGIN VERIFICATION
            </CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.container}>
        <CustomText style={styles.title}>
          You need to gather these documents first
        </CustomText>
        <CustomText style={styles.item}>1. GhanaPostGPS code</CustomText>
        <CustomText style={styles.item}>2. Ghana card info</CustomText>
        <View style={styles.divider} />
        <CustomText style={styles.verify}>
          Here’s how you’ll verify on the next screen
        </CustomText>
        <View style={styles.stepContainer}>
          <View style={styles.navigation}>
            <EllipseIcon />
            <View style={styles.verticalLine} />
            <EllipseIcon />
            <View style={styles.verticalLine} />
            <EllipseIcon />
          </View>
          <View style={styles.steps}>
            <View style={styles.stepsItem}>
              <CustomText style={styles.stepTitle}>
                Select Ghana card
              </CustomText>
              <CustomText style={styles.stepText}>Step 1</CustomText>
              <View style={styles.stepDivider} />
            </View>
            <View style={styles.stepsItem}>
              <CustomText style={styles.stepTitle}>
                Fill in Ghana card and GhanaPost code
              </CustomText>
              <CustomText style={styles.stepText}>Step 2</CustomText>
              <View style={styles.stepDivider} />
            </View>
            <View style={styles.stepsItem}>
              <CustomText style={styles.stepTitle}>Take a selfie</CustomText>
              <CustomText style={styles.stepText}>Final step</CustomText>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default KYCInfoScreen;

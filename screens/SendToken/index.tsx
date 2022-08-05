import { useNavigation } from "@react-navigation/native";
import { Scan } from "iconsax-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const SendTokenScreen: React.FC<RootStackScreenProps<"SendToken">> = () => {
  const navigation = useNavigation();
  const headerRight = (
    <TouchableOpacity>
      <Scan size={RFValue(24)} color="#000" />
    </TouchableOpacity>
  );

  const onContinue = () => {
    navigation.navigate("SendTokenSummary");
  };

  return (
    <ScreenLayout
      showHeader
      title="Send bitcoin"
      showShadow
      scrollable
      headerRight={headerRight}
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onContinue}
            // disabled={!Boolean(paymentMethod)}
            style={[
              styles.footerButton,
              {
                backgroundColor: "#3861FB",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>CONTINUE</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Recipent address"
          rightComponent={
            <TouchableOpacity>
              <CustomText style={styles.pasteText}>PASTE</CustomText>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Amount in USD"
          rightComponent={
            <View style={styles.amountRight}>
              <CustomText>MAX</CustomText>
              <View style={styles.tablet}>
                <CustomText style={styles.tabletText}>BTC</CustomText>
              </View>
            </View>
          }
        />
      </View>
      <CustomText style={styles.availableText}>
        Available in wallet: 0.0034 BTC
      </CustomText>
    </ScreenLayout>
  );
};

export default SendTokenScreen;

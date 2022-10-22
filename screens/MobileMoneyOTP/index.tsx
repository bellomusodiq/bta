import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { TagCross } from "iconsax-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  verifyChangeEmail,
  verifyChangePassword,
  verifyMobileMoneyApi,
} from "../../api/profile.api";
import { useAppSelector } from "../../store";
import Toast from "react-native-toast-message";

const MobileMoneyOTP: React.FC<RootStackScreenProps<"MobileMoneyOTP">> = ({
  route,
}) => {
  const { user } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();
  const [pin, setPin] = useState<string>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    method,
    momoName,
    momoUserPhone,
    selectedUserNetwork,
    password,
  } = route.params;

  const updatePin = (digit: string) => {
    if (pin.length < 4) {
      setPin(`${pin}${digit}`);
    }
  };

  const deletePin = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, pin.length - 1));
    }
  };

  const verifyMobileMoney = async () => {
    setLoading(true);
    const result = await verifyMobileMoneyApi(
      user.token,
      method,
      momoName,
      momoUserPhone,
      selectedUserNetwork,
      password,
      pin
    );
    setLoading(false);

    if (result.success) {
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: result.message,
      });
    } else {
      Toast.show({
        type: "error",
        text1: result.message,
      });
    }
  };

  useEffect(() => {
    setError(null);
    if (pin.length === 4) {
      // @ts-ignore-next-line
      verifyMobileMoney();
    }
  }, [pin]);

  useEffect(() => {
    setPin("");
  }, [route.params?.confirm]);

  const splitPin = pin.split("");
  return (
    <ScreenLayout showHeader title="">
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Enter your OTP code</CustomText>
      </View>
      <View style={styles.divider} />
      <View style={styles.pinContainer}>
        {Array(4)
          .fill(1)
          .map((_, i) => (
            <View key={i} style={styles.pin}>
              {splitPin[i] && <CustomText style={styles.pinText}>*</CustomText>}
            </View>
          ))}
      </View>
      {error ? (
        <CustomText style={styles.error}>{error}</CustomText>
      ) : (
        <CustomText style={styles.enterPin}>
          Enter OTP sent to your phone number
        </CustomText>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("1")}>
          <CustomText style={styles.buttonText}>1</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("2")}>
          <CustomText style={styles.buttonText}>2</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("3")}>
          <CustomText style={styles.buttonText}>3</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("4")}>
          <CustomText style={styles.buttonText}>4</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("5")}>
          <CustomText style={styles.buttonText}>5</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("6")}>
          <CustomText style={styles.buttonText}>6</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("7")}>
          <CustomText style={styles.buttonText}>7</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("8")}>
          <CustomText style={styles.buttonText}>8</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updatePin("9")}>
          <CustomText style={styles.buttonText}>9</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button} />
        <TouchableOpacity style={styles.button} onPress={() => updatePin("0")}>
          <CustomText style={styles.buttonText}>0</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deletePin}
          style={[styles.button, { marginBottom: -60 }]}
        >
          <TagCross color="black" variant="Bold" size={32} />
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default MobileMoneyOTP;

import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { TagCross } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { verifyEmailApi } from "../../api/auth.api";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/auth.slice";

const VerifyEmailScreen: React.FC<RootStackScreenProps<"VerifyEmail">> = ({
  route,
}) => {
  const { params } = route;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [pin, setPin] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  const verifyEmail = async () => {
    setLoading(true);
    setError(null);
    const result = await verifyEmailApi(
      params.token,
      params.email,
      params.country,
      params.countryCode,
      params.countryCurrency,
      params.countryCallingCode,
      params.username,
      params.password,
      pin
    );

    setLoading(false);

    if (result.success) {
      await AsyncStorage.setItem("@user", JSON.stringify(result));
      dispatch(setUser(result));
      navigation.navigate("SetPin");
    } else {
      Toast.show({
        autoHide: true,
        visibilityTime: 7000,
        type: "error",
        text1: result.message,
      });
      setError(result.message);
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
      // @ts-ignore-next-line
      verifyEmail();
    }
  }, [pin]);

  const splitPin = pin.split("");
  return (
    <ScreenLayout showHeader title="">
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Verify your email address</CustomText>
      </View>
      <CustomText style={styles.subTitle}>
        Enter the 4-digit OTP code we sent to your email address:{" "}
        <CustomText style={styles.hilight}>{params.email}</CustomText>
      </CustomText>

      <View style={styles.divider} />
      <View style={styles.pinContainer}>
        {Array(4)
          .fill(1)
          .map((_, i) => (
            <View key={i} style={styles.pin}>
              {splitPin[i] && (
                <CustomText style={styles.pinText}>{splitPin[i]}</CustomText>
              )}
            </View>
          ))}
      </View>
      <TouchableOpacity>
        <CustomText style={styles.enterPin}>
          Didnt receive code?{" "}
          <CustomText style={styles.hilight}>Resend email</CustomText>
        </CustomText>
      </TouchableOpacity>
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

export default VerifyEmailScreen;

import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import * as LocalAuthentication from "expo-local-authentication";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import FaceImage from "../../assets/images/face.png";
import { TagCross } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppSelector } from "../../store";
import { logoutHandler } from "../../utils/logout";

const TransactionPinScreen: React.FC<
  RootStackScreenProps<"TransactionPin">
> = ({ route }) => {
  const {
    params: { navigateTo, ...restParams },
  } = route;

  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);

  const [pin, setPin] = useState<string>("");
  const [compatible, setCompatible] = useState<boolean>(false);
  const [fingerprints, setFingerprints] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  const checkPin = async () => {
    const userPin = await AsyncStorage.getItem("@pin");
    if (userPin && userPin === pin) {
      // @ts-ignore-next-line
      navigation.replace(navigateTo, { ...restParams, pinSuccess: true });
    } else {
      setError("Incorrect pin. Try again!");
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
      checkPin();
    } else {
      setError("");
    }
  }, [pin]);

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    setCompatible(compatible);
  };

  const checkForFingerprints = async () => {
    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    setFingerprints(fingerprints);
  };

  const scanFingerprint = async () => {
    let result = await LocalAuthentication.authenticateAsync(
      "Scan your finger."
    );
    if (result.success) {
      navigation.replace(navigateTo, { ...restParams, pinSuccess: true });
    }
  };

  useEffect(() => {
    checkDeviceForHardware();
    checkForFingerprints();
  }, []);

  const signOut = () => {
    logoutHandler(navigation);
  };

  const splitPin = pin.split("");
  return (
    <ScreenLayout SafeAreaBackground="white" showHeader title="">
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Welcome back!</CustomText>
        <TouchableOpacity onPress={signOut}>
          <CustomText style={styles.nameText}>Not {user.firstName}?</CustomText>
        </TouchableOpacity>
      </View>
      <CustomText style={styles.email}>{user.email}</CustomText>
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
        <CustomText style={styles.errorPin}>{error}</CustomText>
      ) : (
        <CustomText style={styles.enterPin}>
          Enter your pin to log in
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
        <TouchableOpacity
          onPress={scanFingerprint}
          style={[styles.button, { marginBottom: -60 }]}
        >
          <Image
            style={styles.faceId}
            source={FaceImage}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </TouchableOpacity>
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
      <TouchableOpacity onPress={() => navigation.navigate("ResetPin")}>
        <CustomText style={styles.forgotPin}>
          Forgot pin? <CustomText style={styles.hilight}>Reset pin</CustomText>
        </CustomText>
      </TouchableOpacity>
    </ScreenLayout>
  );
};

export default TransactionPinScreen;

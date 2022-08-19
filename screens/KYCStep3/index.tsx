import { useNavigation } from "@react-navigation/native";
import { Add, Bank, Camera, TickCircle } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "../../components/CustomText";
import PaymentItem from "../../components/PaymentItem";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";

const KYCStep3Screen: React.FC<RootStackScreenProps<"KYCStep3">> = () => {
  const [idImage, setIdImage] = useState<string>("");
  const [selfieImage, setSelfieImage] = useState<string>("");

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const navigation = useNavigation();

  const pickImage = async (imageType: "id" | "selfie") => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      // @ts-ignore-next-line
      cameraType: imageType === "selfie" ? "front" : "back",
    });

    if (!result.cancelled) {
      if (imageType === "id") {
        setIdImage(result.uri);
      } else {
        setSelfieImage(result.uri);
      }
    }
  };

  const disabled = (!idImage || !selfieImage) && false;

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <ScreenLayout
      title="Step 3"
      showHeader
      showShadow
      scrollable
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("KYCInformationReview")}
            disabled={disabled}
            style={[
              styles.footerButton,
              {
                backgroundColor: !disabled ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>
              REVIEW INFORMATION
            </CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.progressContainer}>
        <CustomText style={styles.kycText}>KYC progress</CustomText>
        <View style={styles.progress}>
          <View style={[styles.progressCompleted, { width: "66%" }]} />
        </View>
        <CustomText style={styles.progressText}>2/3 done 👏👏</CustomText>
      </View>
      <View style={styles.divider} />
      <CustomText style={styles.title}>Upload your Ghana card ID</CustomText>
      <CustomText style={styles.subTitle}>
        Tip: Take picture in a room with enough light. Make sure all four edges
        of the document shows
      </CustomText>
      {idImage ? (
        <>
          <View style={styles.previewContainer}>
            <Image
              source={{ uri: idImage }}
              style={{ width: 40, height: 40 }}
            />
            <View style={styles.textContainer}>
              <CustomText style={styles.previewTitle}>ID Card</CustomText>
              <CustomText style={styles.previewText}>
                Upload completed
              </CustomText>
            </View>
            <TickCircle color="#27C27A" variant="Bold" />
          </View>
          <TouchableOpacity onPress={() => setIdImage("")}>
            <CustomText style={styles.remove}>Remove</CustomText>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={() => pickImage("id")} style={styles.button}>
          <Add color="#000000" size={RFValue(24)} />
          <CustomText style={styles.buttonText}>Upload Ghana ID</CustomText>
        </TouchableOpacity>
      )}
      <View style={styles.divider} />
      <CustomText style={styles.title2}>Take a selfie</CustomText>
      <CustomText style={styles.subTitle}>
        Tip: Take selfie in a room with enough light and place your face clearly
        within the box.
      </CustomText>
      {selfieImage ? (
        <>
          <View style={styles.previewContainer}>
            <Image
              source={{ uri: selfieImage }}
              style={{ width: 40, height: 40 }}
            />
            <View style={styles.textContainer}>
              <CustomText style={styles.previewTitle}>Selfie</CustomText>
              <CustomText style={styles.previewText}>
                Selfie captured
              </CustomText>
            </View>
            <TickCircle color="#27C27A" variant="Bold" />
          </View>
          <TouchableOpacity onPress={() => setSelfieImage("")}>
            <CustomText style={styles.remove}>Remove</CustomText>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => pickImage("selfie")}
          style={styles.button}
        >
          <Camera color="#3861FB" size={RFValue(24)} />
          <CustomText style={styles.buttonText2}>Take a selfie</CustomText>
        </TouchableOpacity>
      )}
    </ScreenLayout>
  );
};

export default KYCStep3Screen;

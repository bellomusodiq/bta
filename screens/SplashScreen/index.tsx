import React, { useRef } from "react";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import SplashImage1 from "../../assets/images/splash1.png";
import SplashImage2 from "../../assets/images/splash2.png";
import SplashImage3 from "../../assets/images/splash3.png";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const slides = [
  {
    key: 0,
    title: (
      <CustomText style={styles.title}>
        Welcome to <CustomText style={styles.hilight}>Bitafrika</CustomText>
      </CustomText>
    ),
    image: SplashImage1,
    buttonTitle: "Continue",
    text: "BitAfrika is the easiest way to buy, sell, send and receive cryptocurrency in Africa",
  },
  {
    key: 1,
    title: (
      <CustomText style={styles.title}>
        Welcome to <CustomText style={styles.hilight}>Bitafrika</CustomText>
      </CustomText>
    ),
    buttonTitle: "Continue",
    image: SplashImage2,
    text: "BitAfrika is the easiest way to buy, sell, send and receive cryptocurrency in Africa",
  },
  {
    key: 2,
    title: (
      <CustomText style={styles.title}>
        Welcome to <CustomText style={styles.hilight}>Bitafrika</CustomText>
      </CustomText>
    ),
    buttonTitle: "Get Started",
    image: SplashImage3,
    text: "BitAfrika is the easiest way to buy, sell, send and receive cryptocurrency in Africa",
  },
];

const SplashScreen: React.FC<RootStackScreenProps<"SplashScreen">> = () => {
  const sliderRef = useRef<any>();
  const navigation = useNavigation();

  const onContinue = (index: number) => {
    if (index < slides.length - 1) {
      sliderRef.current.goToSlide(index + 1);
    } else {
      navigateToSignin();
    }
  };

  const navigateToSignin = () => {
    navigation.navigate("SignIn");
  };
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.container}>
      <Image
        source={item.image}
        resizeMethod="resize"
        resizeMode="contain"
        style={styles.image}
      />
      {item.title}
      <CustomText style={styles.text}>{item.text}</CustomText>
      <CustomButton onPress={() => onContinue(item.key)} style={styles.button}>
        {item.buttonTitle}
      </CustomButton>
      <CustomButton
        onPress={navigateToSignin}
        buttonText={styles.buttonText}
        style={[styles.button, styles.signIn]}
      >
        Sign In
      </CustomButton>
    </View>
  );
  return (
    <AppIntroSlider ref={sliderRef} renderItem={renderItem} data={slides} />
  );
};

export default SplashScreen;
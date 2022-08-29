import { StackActions, useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash } from "iconsax-react-native";
import React, { useMemo, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import MomoImage from "../../assets/images/momo.png";
import GhanaImage from "../../assets/images/ghana.png";

const countryData = [
  {
    label: "",
    value: "+233",
    image: <Image source={GhanaImage} style={styles.image} />,
  },
];

const AddMobileMoneyScreen: React.FC<
  RootStackScreenProps<"AddMobileMoney">
> = ({ route }) => {
  const navigation = useNavigation();
  const { params } = route;

  const [accountName, setAccountName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [country, setCountry] = useState<any>(countryData[0]);
  const [provider, setProvider] = useState<any>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const disabled =
    !accountName || !phoneNumber || !country || !provider || !password;

  const onNavigate = () => {
    if (params?.from) {
      const popAction = StackActions.pop(2);
      navigation.dispatch(popAction);
    } else {
      navigation.goBack();
    }
  };

  return (
    <ScreenLayout
      title="Add mobile money"
      scrollable
      showHeader
      showShadow
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={onNavigate}
            disabled={disabled}
            style={[
              styles.footerButton,
              {
                backgroundColor: !disabled ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>ADD</CustomText>
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Select provider</CustomText>
        <Dropdown
          value={provider}
          onChange={(val) => setProvider(val)}
          style={styles.dropdown}
          data={[
            {
              label: "MoMo - MTN mobile money",
              value: "GHC",
              image: <Image source={MomoImage} style={styles.image} />,
            },
          ]}
          renderLeftIcon={() =>
            provider ? <Image source={MomoImage} style={styles.image} /> : null
          }
          renderItem={(item, selected) => (
            <View style={styles.dropdownItem}>
              {item.image}
              <CustomText style={styles.dropdownItemText}>
                {item.label}
              </CustomText>
            </View>
          )}
          placeholder={"Select provider"}
          labelField="label"
          valueField="value"
          selectedTextStyle={{ color: "#3861FB" }}
        />
        <View style={styles.divider} />
        <CustomText style={styles.inputTitle}>Select provider</CustomText>
        <View style={styles.countryDropdownContainer}>
          <Dropdown
            value={country}
            onChange={(val) => setCountry(val)}
            style={styles.countryDropdown}
            data={countryData}
            renderLeftIcon={() =>
              country ? (
                <Image source={GhanaImage} style={styles.countryImage} />
              ) : null
            }
            renderItem={(item, selected) => (
              <View style={styles.dropdownItem}>
                {item.image}
                <CustomText style={styles.dropdownItemText}>
                  {item.value}
                </CustomText>
              </View>
            )}
            placeholder={""}
            labelField="label"
            valueField="value"
            selectedTextStyle={{ color: "#3861FB" }}
          />
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone"
            placeholderTextColor="#CCCCCC"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.divider} />
        <CustomText style={styles.inputTitle1}>Name on account</CustomText>
        <CustomText style={styles.inputSubTitle}>
          Your mobile money account name must match the name on your profile
        </CustomText>
        <CustomInput
          style={styles.input}
          value={accountName}
          onChangeText={(value) => setAccountName(value)}
          placeholder="Enter momo account name"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Password</CustomText>
        <CustomInput
          style={styles.input}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter your password"
          rightComponent={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <Eye color="black" variant="Bold" size={RFValue(20)} />
              ) : (
                <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
              )}
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.margin} />
    </ScreenLayout>
  );
};

export default AddMobileMoneyScreen;

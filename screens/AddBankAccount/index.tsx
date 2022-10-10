import { useNavigation } from "@react-navigation/native";
import { Eye, EyeSlash, SearchNormal1 } from "iconsax-react-native";
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
import AccessImage from "../../assets/images/access-bank.png";
import CitiImage from "../../assets/images/citi-bank.png";
import EcobankImage from "../../assets/images/ecobank.png";
import { addBankAccountApi } from "../../api/profile.api";
import { useAppSelector } from "../../store";
import CustomButton from "../../components/CustomButton";
import Toast from "react-native-toast-message";

const AddBankAccountScreen: React.FC<
  RootStackScreenProps<"AddBankAccount">
> = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();
  const [query, setQuery] = useState<string>("");
  const [accountName, setAccountName] = useState<string>("");
  const [bank, setBank] = useState<any>({
    label: "Access bank GH",
    value: "ACCESS",
    image: (
      <Image source={AccessImage} style={styles.image} resizeMode="contain" />
    ),
  });
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const disabled = !accountName || !accountNumber || !bank || loading;

  const addBankAccount = async () => {
    setLoading(true);
    const result = await addBankAccountApi(
      user.token,
      bank.value,
      password,
      accountName,
      accountNumber
    );
    setLoading(false);
    console.log(result);

    if (result?.success) {
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: result?.message,
      });
    } else {
      Toast.show({
        type: "error",
        text1: result?.message,
      });
    }
  };

  return (
    <ScreenLayout title="Add bank account" scrollable showHeader showShadow>
      <View style={styles.inputContainer}>
        <CustomText style={styles.inputTitle}>Select bank</CustomText>
        <Dropdown
          search
          containerStyle={styles.dropdownContainerStyle}
          renderInputSearch={() => (
            <View style={styles.searchInputContainer}>
              <SearchNormal1
                color="#979797"
                size={RFValue(16)}
                variant="Linear"
              />
              <TextInput
                placeholder="Search for banks"
                style={styles.searchInput}
                placeholderTextColor="#979797"
                value={query}
                onChangeText={(value) => setQuery(value)}
              />
              <TouchableOpacity onPress={() => setQuery("")}>
                <CustomText style={styles.searchCancel}>Cancel</CustomText>
              </TouchableOpacity>
            </View>
          )}
          value={bank}
          onChange={(val) => setBank(val)}
          style={styles.dropdown}
          data={[
            {
              label: "Access bank GH",
              value: "ACCESS",
              image: (
                <Image
                  source={AccessImage}
                  style={styles.image}
                  resizeMode="contain"
                />
              ),
            },
          ]}
          renderLeftIcon={() => (bank ? bank.image : null)}
          renderItem={(item, selected) => (
            <View style={styles.dropdownItem}>
              {item.image}
              <View style={styles.dropdownItemContainer}>
                <CustomText style={styles.dropdownItemText}>
                  {item.label}
                </CustomText>
                <CustomText style={styles.rightText}>{item.value}</CustomText>
              </View>
            </View>
          )}
          placeholder={"Select bank"}
          labelField="label"
          valueField="value"
          // selectedTextStyle={{ color: "#3861FB" }}
        />
      </View>
      {bank ? (
        <>
          <View style={styles.divider} />
          <CustomText style={styles.inputTitle}>Account name</CustomText>
          <CustomInput
            style={styles.input}
            value={accountName}
            onChangeText={(value) => setAccountName(value)}
            placeholder="Enter account name"
          />
          <View style={styles.inputContainer}>
            <CustomText style={styles.inputTitle}>Account number</CustomText>
            <CustomInput
              style={styles.input}
              value={accountNumber}
              onChangeText={(value) => setAccountNumber(value)}
              placeholder="Enter account number"
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText style={styles.inputTitle}>Password</CustomText>
            <CustomInput
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
              rightComponent={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <Eye color="black" variant="Bold" size={RFValue(20)} />
                  ) : (
                    <EyeSlash color="black" variant="Bold" size={RFValue(20)} />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
          <CustomText style={styles.inputTitle1}>
            Please add accounts that belongs to you only. Adding an account with
            a diferent name from your KYC details will require extra
            verifications
          </CustomText>
          <CustomButton
            loading={loading}
            onPress={addBankAccount}
            disabled={disabled}
            style={[
              styles.footerButton,
              {
                backgroundColor: !disabled ? "#3861FB" : "#979797",
              },
            ]}
          >
            <CustomText style={styles.footerButtonText}>SAVE</CustomText>
          </CustomButton>
          <View style={styles.margin} />
        </>
      ) : null}
    </ScreenLayout>
  );
};

export default AddBankAccountScreen;

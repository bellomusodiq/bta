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

const AddBankAccountScreen: React.FC<
  RootStackScreenProps<"AddBankAccount">
> = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState<string>("");
  const [accountName, setAccountName] = useState<string>("");
  const [bank, setBank] = useState<any>("");
  const [accountNumber, setAccountNumber] = useState<string>("");

  const disabled = !accountName || !accountNumber || !bank;

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
              value: "Access bank Ltd",
              image: (
                <Image
                  source={AccessImage}
                  style={styles.image}
                  resizeMode="contain"
                />
              ),
            },
            {
              label: "Citibank",
              value: "Citibank Ltd",
              image: (
                <Image
                  source={CitiImage}
                  style={styles.image}
                  resizeMode="contain"
                />
              ),
            },
            {
              label: "Ecobank",
              value: "Ecobank Ghana Ltd",
              image: (
                <Image
                  source={EcobankImage}
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
          <CustomText style={styles.inputTitle1}>
            Please add accounts that belongs to you only. Adding an account with
            a diferent name from your KYC details will require extra
            verifications
          </CustomText>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
          <View style={styles.margin} />
        </>
      ) : null}
    </ScreenLayout>
  );
};

export default AddBankAccountScreen;

import { SearchNormal1, Sort } from "iconsax-react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import Tab from "../../components/Tab";
import { TabItemProps } from "../../components/Tab/types";
import { Dropdown } from "react-native-element-dropdown";
import ScreenLayout from "../../layouts/ScreenLayout";
import { HistoryStackScreenProps, TradeStackScreenProps } from "../../types";
import styles from "./styles";
import EmptyTransactionsImage from "../../assets/images/empty-transactions.png";
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import TradeItem from "../../components/TradeItem";
import { useNavigation } from "@react-navigation/native";
import SellHistory from "../../components/SellHistory";
import SentHistory from "../../components/SentHistory";
import ReceivedHistory from "../../components/ReceivedHistory";
import ReactNativeModal from "react-native-modal";
import CloseIcon from "../../components/icons/close-icon";
import { HistorySelectorProps } from "./types";

const TAB_DATA: TabItemProps[] = [
  {
    title: "Buy",
  },
  {
    title: "Sell",
  },
  {
    title: "Sent",
  },
  {
    title: "Received",
  },
];

const HistorySelector: React.FC<HistorySelectorProps> = ({
  data,
  onChange,
  index,
  title,
}) => (
  <View style={styles.statusContainer}>
    <CustomText style={styles.statusTitle}>{title}</CustomText>
    {data.map((item, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => onChange(i)}
        style={[
          styles.statusItem,
          { backgroundColor: index === i ? "#3861FB" : "white" },
        ]}
      >
        <CustomText
          style={[
            styles.statusItemText,
            {
              color: index === i ? "#FFF" : "#000",
            },
          ]}
        >
          {item}
        </CustomText>
      </TouchableOpacity>
    ))}
  </View>
);

const HistoryScreen: React.FC<HistoryStackScreenProps<"HistoryHome">> = () => {
  const [curerntIndex, setCurrentIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [time, setTime] = useState<number | null>(null);
  const [currency, setCurrency] = useState<any>();
  const navigation = useNavigation();

  const navigateToBuyOrSell = () => {
    if (curerntIndex === 0) {
      navigation.navigate("BuyCrypto");
    } else {
      navigation.navigate("SellCrypto");
    }
  };

  const toggleModal = () => setShowModal(!showModal);
  return (
    <ScreenLayout>
      <View style={styles.headerContainer}>
        <CustomText style={styles.header}>History</CustomText>
        <TouchableOpacity onPress={toggleModal} style={styles.sortButton}>
          <Sort size="20" color="#3861FB" />
          <CustomText style={styles.sortButtonText}>Sort by</CustomText>
        </TouchableOpacity>
      </View>
      <Tab
        tabs={TAB_DATA}
        onTabChange={(index) => setCurrentIndex(index)}
        activeIndex={curerntIndex}
      />
      {curerntIndex === 0 && (
        <View style={styles.emptyContainer}>
          <Image
            // resizeMode="contain"
            source={EmptyTransactionsImage}
            style={styles.image}
          />
          <CustomText style={styles.text}>
            Your transactions will show here
          </CustomText>
        </View>
      )}
      {curerntIndex === 1 && <SellHistory />}
      {curerntIndex === 2 && <SentHistory />}
      {curerntIndex === 3 && <ReceivedHistory />}
      <ReactNativeModal
        isVisible={showModal}
        // hasBackdrop
        backdropOpacity={0.4}
        customBackdrop={
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.backDrop} />
          </TouchableWithoutFeedback>
        }
        swipeDirection={["up", "left", "right", "down"]}
        onSwipeComplete={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderContainer}>
            <CustomText style={styles.modalHeader}>Sort by</CustomText>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.modalHeaderButton}
            >
              <CustomText style={styles.modalHeaderButtonText}>
                Close
              </CustomText>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.modalDivider} />
          <HistorySelector
            title="Status"
            data={["All", "Successful", "Failed", "In-progress"]}
            onChange={(i: number) => setStatus(i)}
            index={status}
          />
          <View style={styles.modalDivider} />
          <HistorySelector
            title="Time"
            data={[
              "Today (5)",
              "1 month (25)",
              "3 months (115)",
              "All time (259)",
            ]}
            onChange={(i: number) => setTime(i)}
            index={time}
          />
          <View style={styles.modalDivider} />
          <View style={styles.dropdownContainer}>
            <CustomText style={styles.statusTitle}>Currency</CustomText>
            <Dropdown
              value={currency}
              onChange={(val) => setCurrency(val)}
              style={styles.dropdown}
              data={[{ label: "GHC - Ghanian cedis", value: "GHC" }]}
              placeholder={"Select currency"}
              labelField="label"
              valueField="value"
              selectedTextStyle={{ color: "#3861FB" }}
            />
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={[
                styles.footerButton,
                {
                  backgroundColor: "white",
                  borderColor: "#F0F0F0",
                },
              ]}
            >
              <CustomText
                style={[styles.footerButtonText, { color: "#3861FB" }]}
              >
                Reset data
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.footerButton}>
              <CustomText style={styles.footerButtonText}>Confirm</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </ScreenLayout>
  );
};

export default HistoryScreen;

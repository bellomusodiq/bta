import React, { useEffect, useState } from "react";
import CustomText from "../../components/CustomText";
import Tab from "../../components/Tab";
import { TabItemProps } from "../../components/Tab/types";
import { Dropdown } from "react-native-element-dropdown";
import ScreenLayout from "../../layouts/ScreenLayout";
import { HistoryStackScreenProps } from "../../types";
import styles from "./styles";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SellHistory from "../../components/SellHistory";
import ReactNativeModal from "react-native-modal";
import CloseIcon from "../../components/icons/close-icon";
import { HistorySelectorProps } from "./types";
import { historyApi } from "../../api/history.api";
import { useAppSelector } from "../../store";
import CustomButton from "../../components/CustomButton";

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

const HistoryScreen: React.FC<HistoryStackScreenProps<"HistoryHome">> = ({
  route,
}) => {
  const params = route.params;
  const tab = params?.tab;
  const { user } = useAppSelector((state) => state.auth);
  const [curerntIndex, setCurrentIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [time, setTime] = useState<number | null>(null);
  const [currency, setCurrency] = useState<any>();
  const [buyHistory, setBuyHistory] = useState<any>([]);
  const [sellHistory, setSellHistory] = useState<any>([]);
  const [receiveHistory, setReceiveHistory] = useState<any>([]);
  const [sendHistory, setSendHistory] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation();

  const navigateToBuyOrSell = () => {
    if (curerntIndex === 0) {
      navigation.navigate("BuyCrypto");
    } else {
      navigation.navigate("SellCrypto");
    }
  };

  const getTransaction = async (
    historyType: string,
    transactionType?: string
  ) => {
    const result = await historyApi(navigation, user.token, historyType, transactionType);
    if (result.success) {
      switch (historyType) {
        case "transactions":
          if (transactionType === "receive") {
            setReceiveHistory(result.history);
          } else {
            setSendHistory(result.history);
          }
          break;
        case "withdrawals":
          setSellHistory(result.history);
          break;
        default:
          setBuyHistory(result.history);
          break;
      }
    } else {
      setError(true);
    }
  };

  const fetchTransactions = async () => {
    setLoading(true);
    setError(false);
    await getTransaction("transactions", "receive");
    await getTransaction("transactions", "send");
    await getTransaction("withdrawals");
    await getTransaction("deposits");
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (tab) {
      switch (tab) {
        case "Buy":
          setCurrentIndex(0);
          break;
        case "Sell":
          setCurrentIndex(1);
          break;
        case "Sent":
          setCurrentIndex(2);
          break;
      }
    }
  }, [tab]);

  const toggleModal = () => setShowModal(!showModal);
  return (
    <ScreenLayout>
      <View style={styles.headerContainer}>
        <CustomText style={styles.header}>History</CustomText>
      </View>
      <View style={styles.tabContainer}>
        <Tab
          tabs={TAB_DATA}
          onTabChange={(index) => setCurrentIndex(index)}
          activeIndex={curerntIndex}
        />
      </View>
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={fetchTransactions}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <>
          {curerntIndex === 0 && (
            <SellHistory
              refresh={fetchTransactions}
              loading={loading}
              data={buyHistory}
              type="Buy"
              arrowType="in"
            />
          )}
          {curerntIndex === 1 && (
            <SellHistory
              refresh={fetchTransactions}
              loading={loading}
              data={sellHistory}
              type="Sell"
              arrowType="out"
            />
          )}
          {curerntIndex === 2 && (
            <SellHistory
              refresh={fetchTransactions}
              loading={loading}
              data={sendHistory}
              type="Sent"
              arrowType="out"
            />
          )}
          {curerntIndex === 3 && (
            <SellHistory
              refresh={fetchTransactions}
              loading={loading}
              data={receiveHistory}
              type="Received"
              arrowType="in"
            />
          )}
        </>
      )}
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
            data={["Today (5)", "Yesterday (25)", "All time (259)"]}
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

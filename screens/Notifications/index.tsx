import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { NotificationItemProps } from "../../components/NotificationItem/types";
import NotificationItem from "../../components/NotificationItem";
import { useIsFocused } from "@react-navigation/native";
import { getNotificationsApi } from "../../api/dashboard.api";
import { useAppSelector } from "../../store";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";

const data: NotificationItemProps[] = [
  {
    read: false,
    title: "BITCOIN GAINS 14%",
    description:
      "Bitcoin price is up by 14% in the last 24 hours, market prices are highly volatile, trade carefully. ",
    date: "5:32 am, August 8, 2022",
  },
  {
    read: false,
    title: "BITCOIN GAINS 14%",
    description:
      "Bitcoin price is up by 14% in the last 24 hours, market prices are highly volatile, trade carefully. ",
    date: "5:32 am, August 8, 2022",
  },
  {
    read: true,
    title: "BITCOIN GAINS 14%",
    description:
      "Bitcoin price is up by 14% in the last 24 hours, market prices are highly volatile, trade carefully. ",
    date: "5:32 am, August 8, 2022",
  },
];

const NotificationsScreen: React.FC<
  RootStackScreenProps<"Notifications">
> = () => {
  const { user } = useAppSelector((state) => state.auth);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getNotifications = async () => {
    setLoading(true);
    setError(false);
    const result = await getNotificationsApi(user?.token);
    setLoading(false);
    if (result.success) {
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getNotifications();
  }, [isFocused]);
  return (
    <ScreenLayout
      showHeader
      title="Notifications"
      headerRight={
        <TouchableOpacity style={styles.headerRightContainer}>
          <Text style={styles.headerRight}>Clear</Text>
        </TouchableOpacity>
      }
    >
      {loading || error ? (
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <CustomText style={styles.errorText}>
                Something went wrong
              </CustomText>
              <CustomButton onPress={getNotifications}>Try again</CustomButton>
            </>
          )}
        </View>
      ) : (
        <FlatList
          style={styles.container}
          data={data}
          renderItem={({ item }) => (
            <NotificationItem
              read={item.read}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          )}
        />
      )}
    </ScreenLayout>
  );
};

export default NotificationsScreen;

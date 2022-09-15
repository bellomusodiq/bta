import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";
import { NotificationItemProps } from "../../components/NotificationItem/types";
import NotificationItem from "../../components/NotificationItem";

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
    </ScreenLayout>
  );
};

export default NotificationsScreen;

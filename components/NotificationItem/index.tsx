import { Sms, SmsNotification } from "iconsax-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { NotificationItemProps } from "./types";

const NotificationItem: React.FC<NotificationItemProps> = ({
  read,
  title,
  description,
  // date,
}) => (
  <TouchableOpacity style={styles.container}>
    {read ? (
      <Sms size="24" opacity={read ? 0.4 : 1} color="#3861FB" variant="Bold" />
    ) : (
      <SmsNotification size="24" color="#3861FB" variant="Bold" />
    )}
    <View style={styles.textContainer}>
      <Text
        style={[
          styles.title,
          {
            opacity: read ? 0.4 : 1,
          },
        ]}
      >
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
      {/* <Text style={styles.date}>{date}</Text> */}
    </View>
  </TouchableOpacity>
);

export default NotificationItem;

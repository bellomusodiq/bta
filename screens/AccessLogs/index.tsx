import { Login, Logout } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { securityLogsApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const LogItem: React.FC<{
  type: string;
  ip: string;
  ua: string;
  date: string;
}> = ({ type, ip, ua, date }) => {
  const formatDate = (date: any) => {
    const newDate = new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <>
      <View style={styles.logItemContainer}>
        {type === "logout" ? (
          <Logout size={RFValue(25)} color="red" />
        ) : (
          <Login size={RFValue(25)} />
        )}
        <View style={styles.logItem}>
          <View style={styles.textContainer}>
            <CustomText numberOfLines={1} style={styles.text}>
              {type}
            </CustomText>
            <CustomText numberOfLines={1} style={styles.text}>
              IP: {ip}
            </CustomText>
          </View>
          <View style={styles.textContainer}>
            <CustomText numberOfLines={1} style={styles.text}>
              {formatDate(date)}
            </CustomText>
            <CustomText numberOfLines={1} style={styles.text}>
              {ua}
            </CustomText>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const AccessLogsScreen: React.FC<
  RootStackScreenProps<"AccountLimits">
> = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [logs, setLogs] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getSecurityLogs = async () => {
    setLoading(true);
    const result = await securityLogsApi(user.token);
    setLoading(false);
    if (result.success) {
      setLogs(result.logs);
    }
  };

  useEffect(() => {
    getSecurityLogs();
  }, []);

  return (
    <ScreenLayout showHeader showShadow title="Security Logs">
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={logs}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <LogItem {...item} />}
          style={{ paddingTop: 15 }}
        />
      )}
    </ScreenLayout>
  );
};

export default AccessLogsScreen;

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useIsFocused,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ArrowSwapHorizontal,
  ChartSquare,
  Clock,
  Element4,
  ProfileCircle,
  User,
} from "iconsax-react-native";
import * as React from "react";
import { ColorSchemeName, Pressable, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  HistoryStackParamList,
  OverviewStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  TradeStackParamList,
} from "../types";
import colors from "../consts/colors";
import LinkingConfiguration from "./LinkingConfiguration";
import OverviewScreen from "../screens/Overview";
import AssetDetailScreen from "../screens/AssetDetail";
import ManageAssetScreen from "../screens/ManageAsset";
import TradeScreen from "../screens/Trade";
import BuyCryptoScreen from "../screens/BuyCrypto";
import SummaryScreen from "../screens/Summary";
import PayInstructionScreen from "../screens/PayInstruction";
import SellCryptoScreen from "../screens/SellCrypto";
import SelectAccountScreen from "../screens/SelectAccount";
import CompleteScreen from "../screens/Complete";
import HistoryScreen from "../screens/History";
import TransactionDetailScreen from "../screens/TransactionDetail";
import SendCryptoScreen from "../screens/SendCrypto";
import SendTokenScreen from "../screens/SendToken";
import SendTokenSummaryScreen from "../screens/SendTokenSummary";
import ReceiveCryptoScreen from "../screens/ReceiveCrypto";
import ReceiveCryptoSummaryScreen from "../screens/ReceiveCryptoSummary";
import ProfileScreen from "../screens/Profile";
import AccountLimitsScreen from "../screens/AccountLimits";
import ChangeEmailScreen from "../screens/ChangeEmail";
import ChangePasswordScreen from "../screens/ChangePassword";
import PaymentAccountsScreen from "../screens/PaymentAccounts";
import AddMobileMoneyScreen from "../screens/AddMobileMoney";
import AddBankAccountScreen from "../screens/AddBankAccount";
import FAQsScreen from "../screens/FAQ";
import KYCBeginScreen from "../screens/KYCBegin";
import KYCInfoScreen from "../screens/KYCInfo";
import KYCStep1Screen from "../screens/KYCStep1";
import KYCStep2Screen from "../screens/KYCStep2";
import KYCStep3Screen from "../screens/KYCStep3";
import KYCInformationScreen from "../screens/KYCInfomationReview";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignIn";
import WelcomeBackScreen from "../screens/WelcomeBack";
import SignUpScreen from "../screens/SignUp";
import VerifyEmailScreen from "../screens/VerifyEmail";
import SetPinScreen from "../screens/SetPin";
import PaymentMethodScreen from "../screens/PaymentMethod";
import AddPaymentMethodScreen from "../screens/AddPaymentMethod";
import PortfolioScreen from "../screens/Portfolio";
import PendingScreen from "../screens/Pending";
import NotificationsScreen from "../screens/Notifications";
import { useAppDispatch, useAppSelector } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../store/auth.slice";
import EmailOTPScreen from "../screens/EmailOTP";
import PasswordOTPScreen from "../screens/PasswordOTP";
import MobileMoneyOTP from "../screens/MobileMoneyOTP";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const getUser = async () => {
    const result = await AsyncStorage.getItem("@user");
    if (result) {
      const user = JSON.parse(result);
      dispatch(setUser(user));
    }
  };

  React.useEffect(() => {
    getUser();
  }, [user, isFocused]);

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name="BuyCrypto" component={BuyCryptoScreen} />
      <Stack.Screen name="SellCrypto" component={SellCryptoScreen} />
      <Stack.Screen name="SelectAccount" component={SelectAccountScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
      <Stack.Screen name="Pending" component={PendingScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="PayInstruction" component={PayInstructionScreen} />
      <Stack.Screen name="SendCrypto" component={SendCryptoScreen} />
      <Stack.Screen name="SendToken" component={SendTokenScreen} />
      <Stack.Screen
        name="SendTokenSummary"
        component={SendTokenSummaryScreen}
      />
      <Stack.Screen name="ReceiveCrypto" component={ReceiveCryptoScreen} />
      <Stack.Screen
        name="ReceiveCryptoSummary"
        component={ReceiveCryptoSummaryScreen}
      />
      <Stack.Screen name="AccountLimits" component={AccountLimitsScreen} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="PaymentAccounts" component={PaymentAccountsScreen} />
      <Stack.Screen name="AddMobileMoney" component={AddMobileMoneyScreen} />
      <Stack.Screen name="AddBankAccount" component={AddBankAccountScreen} />
      <Stack.Screen name="FAQs" component={FAQsScreen} />
      <Stack.Screen name="KYCBegin" component={KYCBeginScreen} />
      <Stack.Screen name="KYCInfo" component={KYCInfoScreen} />
      <Stack.Screen name="KYCStep1" component={KYCStep1Screen} />
      <Stack.Screen name="KYCStep2" component={KYCStep2Screen} />
      <Stack.Screen name="KYCStep3" component={KYCStep3Screen} />
      <Stack.Screen
        name="KYCInformationReview"
        component={KYCInformationScreen}
      />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethodScreen}
      />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="AssetDetail" component={AssetDetailScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="EmailOTP" component={EmailOTPScreen} />
      <Stack.Screen name="PasswordOTP" component={PasswordOTPScreen} />
      <Stack.Screen name="MobileMoneyOTP" component={MobileMoneyOTP} />
    </Stack.Navigator>
  );
}

const OverviewStackNavigator =
  createNativeStackNavigator<OverviewStackParamList>();

const OverviewNavigator = () => (
  <OverviewStackNavigator.Navigator screenOptions={{ header: () => null }}>
    <OverviewStackNavigator.Screen name="Overview" component={OverviewScreen} />
    <OverviewStackNavigator.Screen
      name="ManageAsset"
      component={ManageAssetScreen}
    />
  </OverviewStackNavigator.Navigator>
);

const HistoryStackNavigator =
  createNativeStackNavigator<HistoryStackParamList>();

const HistoryNavigator = () => (
  <HistoryStackNavigator.Navigator
    screenOptions={{
      header: () => null,
    }}
  >
    <HistoryStackNavigator.Screen
      name="HistoryHome"
      component={HistoryScreen}
    />
    <HistoryStackNavigator.Screen
      name="TransactionDetail"
      component={TransactionDetailScreen}
    />
  </HistoryStackNavigator.Navigator>
);

// const TradeNavigator = () => (
//   <SafeAreaView style={{ flex: 1 }}>
//     <TradeStackNavigator.Navigator screenOptions={{ header: () => null }}>
//       <TradeStackNavigator.Screen name="Trade" component={TradeScreen} />
//     </TradeStackNavigator.Navigator>
//   </SafeAreaView>
// );
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="OverviewStack"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelStyle: {
          fontSize: RFValue(11),
          fontFamily: "Inter_600SemiBold",
          marginBottom: 20,
        },
        header: () => null,
        tabBarStyle: {
          paddingTop: 10,
          height: 100,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="OverviewStack"
        component={OverviewNavigator}
        options={({ navigation }: RootTabScreenProps<"OverviewStack">) => ({
          title: "Overview",
          tabBarIcon: ({ focused }) => (
            <Element4
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
              variant="Bold"
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={RFValue(10)}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        })}
      />
      <BottomTab.Screen
        name="Trade"
        component={TradeScreen}
        options={{
          title: "Buy / Sell",
          tabBarIcon: ({ focused }) => (
            <ArrowSwapHorizontal
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
              variant="Bold"
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      />
      {/* <BottomTab.Screen
        name="Portfolio"
        component={TabTwoScreen}
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <ChartSquare
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      /> */}
      <BottomTab.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <Clock
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
              variant="Bold"
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfileCircle
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
              variant="Bold"
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

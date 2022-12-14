/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArrowSwapHorizontal,
  Clock,
  Element4,
  ProfileCircle,
} from "iconsax-react-native";
import * as React from "react";
import { ColorSchemeName, Image, Pressable, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  HistoryStackParamList,
  OverviewStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
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
import PayInstructionCMScreen from "../screens/PayInstructionCM";
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
import {
  setBaseUrl,
  setPriceChanges,
  setUser,
  setUserCountry,
} from "../store/auth.slice";
import EmailOTPScreen from "../screens/EmailOTP";
import PasswordOTPScreen from "../screens/PasswordOTP";
import MobileMoneyOTP from "../screens/MobileMoneyOTP";
import FailedScreen from "../screens/Failed";
import InstructionScreen from "../screens/Instruction";
import CardsScreen from "../screens/Cards";
import AccessLogsScreen from "../screens/AccessLogs";
import WebViewScreen from "../screens/WebView";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import ResetPasswordOTPScreen from "../screens/ResetPasswordOTP";
import ConfrimResetPasswordScreen from "../screens/CofirmResetPassword";
import TransactionPinScreen from "../screens/TransactionPin";
import { getPriceChanges } from "../api/dashboard.api";
import { getCountriesApi } from "../api/auth.api";
import styles from "./styles";
import KYCWaitingScreen from "../screens/KYCWaiting";
import CustomText from "../components/CustomText";

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
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.auth);
  const [firstLogin, setFirstLogin] = React.useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [checkingFirstLogin, setCheckingFirstLogin] =
    React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(true);

  const getUser = async () => {
    setCheckingFirstLogin(true);
    const result = await AsyncStorage.getItem("@user");
    const isLogedIn = await AsyncStorage.getItem("@firstLogin");
    const pin = await AsyncStorage.getItem("@pin");
    const userCountry = await AsyncStorage.getItem("@userCountry");

    setFirstLogin(Boolean(isLogedIn));
    setIsAuthenticated(Boolean(result));
    setCheckingFirstLogin(false);

    if (result) {
      const user = JSON.parse(result);
      dispatch(setUser(user));
    }

    if (userCountry) {
      dispatch(setUserCountry(userCountry));
    }
  };

  const fetchCountries = async () => {
    const result = await getCountriesApi(navigation);
    dispatch(setUserCountry(result.userCountry));
    await AsyncStorage.setItem("@userCountry", result.userCountry);

    const country = result.countries?.find(
      (country: any) => country.code == result.userCountry
    );
    await AsyncStorage.setItem("@baseUrl", country.baseUrl[0]);

    dispatch(setBaseUrl(country.baseUrl[0]));
  };

  const initApp = async () => {
    setLoading(true);
    await fetchCountries();
    await getUser();
    setLoading(false);
  };

  React.useEffect(() => {
    initApp();
  }, []);

  const NewScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <CustomText>new screen</CustomText>
      </View>
    )
  }

  const getIntialRouteName = () => {
    if (!firstLogin) {
      return "SplashScreen";
    } else {
      if (isAuthenticated) {
        return "OverviewStack";
      }
      return "SignIn";
    }
  };

  if (loading || checkingFirstLogin)
    return (
      <Image
        style={styles.background}
        source={require("../assets/images/splash.png")}
      />
    );

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName={getIntialRouteName()}
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
      <Stack.Screen
        name="Complete"
        component={CompleteScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Pending"
        component={PendingScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="Failed"
        component={FailedScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="PayInstruction" component={PayInstructionScreen} />
      <Stack.Screen name="PayInstructionCM" component={PayInstructionCMScreen} />
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
      <Stack.Screen name="Instruction" component={InstructionScreen} />
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="AccessLogs" component={AccessLogsScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="KYCWaiting" component={KYCWaitingScreen} />
      <Stack.Screen
        name="ResetPasswordOTP"
        component={ResetPasswordOTPScreen}
      />
      <Stack.Screen
        name="ConfirmResetPassword"
        component={ConfrimResetPasswordScreen}
      />
      <Stack.Screen name="TransactionPin" component={TransactionPinScreen} />
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

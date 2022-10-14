/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
  BuyCrypto: {
    payment?: {
      title: string;
    };
  };
  Summary: {
    sell?: boolean;
  };
  PayInstruction: undefined;
  SellCrypto?: {
    accountName: string;
    accountNumber?: string;
  };
  SelectAccount: undefined;
  Complete: undefined;
  Pending: undefined;
  Failed: undefined;
  SendCrypto: undefined;
  SendToken: undefined;
  SendTokenSummary: undefined;
  ReceiveCrypto: undefined;
  ReceiveCryptoSummary: undefined;
  AccountLimits: undefined;
  ChangeEmail: undefined;
  ChangePassword: undefined;
  PaymentAccounts: undefined;
  AddMobileMoney: {
    from?: string;
  };
  AddBankAccount: undefined;
  FAQs: undefined;
  KYCBegin: undefined;
  KYCInfo: undefined;
  KYCStep1: undefined;
  KYCStep2: undefined;
  KYCStep3: undefined;
  KYCSelfie: undefined;
  KYCID: undefined;
  KYCInformationReview: undefined;
  SetPin: {
    confirm?: boolean;
    pin?: string;
  };
  EmailOTP: undefined;
  PasswordOTP: undefined;
  MobileMoneyOTP: any;
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  WelcomeBack: undefined;
  VerifyEmail: undefined;
  PaymentMethod: undefined;
  AddPaymentMethod: undefined;
  Portfolio: undefined;
  AssetDetail: undefined;
  Notifications: undefined;
};

export type OverviewStackParamList = {
  Overview: undefined;
  AssetDetail: undefined;
  NotFound: undefined;
  ManageAsset: undefined;
};

export type HistoryStackParamList = {
  HistoryHome: undefined;
  TransactionDetail: any;
};

export type TradeStackParamList = {
  Trade: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type OverviewStackScreenProps<
  Screen extends keyof OverviewStackParamList
> = NativeStackScreenProps<OverviewStackParamList, Screen>;

export type HistoryStackScreenProps<
  Screen extends keyof HistoryStackParamList
> = NativeStackScreenProps<HistoryStackParamList, Screen>;

export type TradeStackScreenProps<Screen extends keyof TradeStackParamList> =
  NativeStackScreenProps<TradeStackParamList, Screen>;

export type RootTabParamList = {
  OverviewStack: undefined;
  Trade: undefined;
  Portfolio: undefined;
  History: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

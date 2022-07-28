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
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArrowSwapHorizontal,
  ChartSquare,
  Clock,
  Element4,
  User,
} from "iconsax-react-native";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import colors from "../consts/colors";
import LinkingConfiguration from "./LinkingConfiguration";
import OverviewScreen from "../screens/Overview";
import AssetDetailScreen from "../screens/AssetDetail";

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
  return (
    <Stack.Navigator screenOptions={{
      header: () => null,
    }}>
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
      <Stack.Screen name="AssetDetail" component={AssetDetailScreen} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Overview"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelStyle: {
          fontSize: RFValue(11),
        },
        header: () => null,
      }}
    >
      <BottomTab.Screen
        name="Overview"
        component={OverviewScreen}
        options={({ navigation }: RootTabScreenProps<"Overview">) => ({
          title: "Overview",
          tabBarIcon: ({ focused }) => (
            <Element4
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
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
        component={TabTwoScreen}
        options={{
          title: "Trade",
          tabBarIcon: ({ focused }) => (
            <ArrowSwapHorizontal
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      />
      <BottomTab.Screen
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
      />
      <BottomTab.Screen
        name="History"
        component={TabTwoScreen}
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <Clock
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
            />
          ),
          tabBarActiveTintColor: colors.navigationIconActive,
          tabBarInactiveTintColor: colors.navigationIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <User
              size={RFValue(20)}
              color={
                focused ? colors.navigationIconActive : colors.navigationIcon
              }
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

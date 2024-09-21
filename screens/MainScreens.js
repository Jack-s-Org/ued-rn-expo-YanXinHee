import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import DiscoverScreen from "./DiscoverScreen";
import AddScreen from "./AddScreen";
import ChooseConcertScreen from "./ChooseConcertScreen";
import InfoScreen from "./InfoScreen";
import SettingsScreen from "./SettingsScreen";
import SuccessScreen from "./SuccessScrene";
import TicketsScreen from "./TicketsScreen";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SignInScreen from "./SignInScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const DiscoverStack = () => {
  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <MainStacks.Screen name="ChooseConcert" component={ChooseConcertScreen} />
      <MainStacks.Screen name="InfoScreen" component={InfoScreen} />
      <MainStacks.Screen name="SuccessScreen" component={SuccessScreen} />
    </MainStacks.Navigator>
  );
};

// Bottom Tab Navigator with the Discover Stack and others
const MainTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF0898",
        tabBarStyle: {
          backgroundColor: "#000000", // Set tab bar background color to black
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="music" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell" size={size} color={color} />
          ),
          tabBarLabel: "Notifications",
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStack} // Using the DiscoverStack
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />

      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="ticket-alt" size={size} color={color} />
          ),
          tabBarLabel: "TicketsScreen",
        }}
      />
    </Tab.Navigator>
  );
};

// Main Screens which includes the tab navigator and additional screens like Add and Settings
const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;

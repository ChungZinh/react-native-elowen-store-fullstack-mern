import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CatalogScreen from "../screens/CatalogScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: hp(7.5),
  },
};
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "black" : "#D3D3D3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Catalo"
        component={CatalogScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="menu"
                size={24}
                color={focused ? "black" : "#D3D3D3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="heart"
                size={24}
                color={focused ? "black" : "#D3D3D3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-person-outline"
                size={26}
                color={focused ? "black" : "#D3D3D3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import BottomTab from "./BottomTab";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import MyCartScreen from "../screens/MyCartScreen";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false,}}>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Cart" component={MyCartScreen} />
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="PDetail" component={ProductDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

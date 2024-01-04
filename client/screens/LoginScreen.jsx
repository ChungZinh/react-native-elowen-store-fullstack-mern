import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFFFFF" }}>
      <StatusBar />
      <View className="px-3 flex-1">
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 3.5 }}>
        <View className="justify-center items-center">
          <Image source={require("../assets/images/logo.png")} />
          <Text style={{ fontSize: wp(10), fontFamily: "regular" }}>
            Welcome to Elowen
          </Text>
          <Text className="text-neutral-300" style={{ fontSize: wp(4) }}>
            Please log in or sign up to continue shopping
          </Text>
        </View>

        <View className="px-4 mt-8 mb-6">
          <Button
            type={"icon"}
            color={"#FFFFFF"}
            title={"Continue with Google"}
            textColor={"black"}
          >
            <AntDesign name="google" size={24} color="black" />
          </Button>
          <Button
            type={"icon"}
            color={"#0067db"}
            title={"Continue with Facebook"}
            textColor={"white"}
          >
            <FontAwesome5 name="facebook" size={24} color="white" />
          </Button>
          <Button
            type={"icon"}
            color={"black"}
            title={"Continue with Apple"}
            textColor={"white"}
          >
            <AntDesign name="apple1" size={24} color="white" />
          </Button>
        </View>

        <View className="justify-center items-center mb-6">
          <Text>or</Text>
        </View>

        <View className="px-4">
          <Button
            onPress={() => navigation.navigate('Main')}
            color={"black"}
            title={"Sign in with password"}
            textColor={"white"}
          >
            <AntDesign name="apple1" size={24} color="white" />
          </Button>
        </View>
        <View className="flex-row items-center justify-center space-x-1">
          <Text className="text-neutral-400">Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

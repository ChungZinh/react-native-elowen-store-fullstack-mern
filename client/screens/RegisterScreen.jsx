import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [checkRemembered, setCheckRemembered] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFFFFF" }}>
      <StatusBar />
      <View className="px-3 flex-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 4 }}>
        <View className="justify-center items-center">
          <Image source={require("../assets/images/logo.png")} />
          <Text style={{ fontSize: wp(10), fontFamily: "regular" }}>
            Create Your Account
          </Text>
        </View>

        <View className="px-4 mt-8 space-y-4">
          <View className="flex-row items-center space-x-2 px-4 bg-neutral-100 py-2 rounded-md shadow-neutral-300 shadow-md">
            <Feather name="mail" size={24} color="#a3a3a3" />
            <TextInput placeholder="Email" placeholderTextColor={"#d3d3d3"} />
          </View>
          <View className="flex-row items-center justify-between px-4 bg-neutral-100 py-2 rounded-md shadow-neutral-300 shadow-md">
            <View className="flex-row items-center space-x-2">
              <Feather name="lock" size={24} color="#a3a3a3" />
              <TextInput
                placeholder="Password"
                style={{ width: "80%" }}
                placeholderTextColor={"#d3d3d3"}
                secureTextEntry={secureTextEntry}
              />
            </View>
            <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
              {secureTextEntry ? (
                <Feather name="eye-off" size={20} color="#a3a3a3" />
              ) : (
                <Feather name="eye" size={20} color="#a3a3a3" />
              )}
            </Pressable>
          </View>
        </View>

        <View className="flex-row space-x-3 px-4 mt-4 mb-8 items-center">
          <TouchableOpacity
            onPress={() => setCheckRemembered(!checkRemembered)}
          >
            {checkRemembered ? (
              <Feather name="check-square" size={24} color="black" />
            ) : (
              <Feather name="square" size={24} color="black" />
            )}
          </TouchableOpacity>
          <Text>Remember me</Text>
        </View>

        <View className="px-4 ">
          <Button color={"#404446"} textColor={"#ffffff"} title={"Sign up"} />
        </View>

        <View className="justify-center items-center mb-8">
          <Text>or continue with</Text>
        </View>

        <View className="flex-row items-center justify-center space-x-2 mb-3">
          <TouchableOpacity
            className="border-0.5 border-neutral-300 items-center justify-center "
            style={{ width: wp(25), height: wp(10) }}
          >
            <AntDesign name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            className="border-0.5 border-neutral-300 items-center justify-center "
            style={{ width: wp(25), height: wp(10) }}
          >
            <FontAwesome5 name="facebook" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            className="border-0.5 border-neutral-300 items-center justify-center "
            style={{ width: wp(25), height: wp(10) }}
          >
            <AntDesign name="apple1" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-center space-x-1">
          <Text className="text-neutral-400">Already have an account?</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

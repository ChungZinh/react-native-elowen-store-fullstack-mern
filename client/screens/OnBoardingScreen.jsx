import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("Login");
  }, 1000);

  return (
    <View
      style={{ backgroundColor: "#FFFFFF" }}
      className="flex-1 justify-center items-center"
    >
      <View className="items-center">
        <Image source={require("../assets/images/logo.png")} />
        <Text style={{ fontSize: wp(12), fontFamily: "regular" }}>Elowen</Text>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

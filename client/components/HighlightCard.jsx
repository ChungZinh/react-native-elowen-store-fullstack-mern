import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const HighlightCard = ({ item }) => {
  return (
    <TouchableOpacity className="ml-3  p-0.5 rounded-lg border-2 shadow-md justify-center items-center shadow-neutral-400">
      <Image
        className="bg-black rounded-lg opacity-80"
        style={{ width: wp(26), height: wp(36), resizeMode: "cover" }}
        source={item.img}
      />

      <Text
        style={{ fontSize: wp(4.5), fontFamily: "medium", color: "#FFFFFF" }}
        className="absolute bottom-5"
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HighlightCard;

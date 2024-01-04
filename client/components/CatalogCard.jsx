import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const CatalogCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity  className="space-y-2 mb-6 " onPress={onPress}>
      <Image
        source={item.image}
        style={{
          width: wp(44),
          height: wp(55),
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
      <Text
        style={{ fontSize: wp(4), fontFamily: "regular" }}
        className="text-center"
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CatalogCard;

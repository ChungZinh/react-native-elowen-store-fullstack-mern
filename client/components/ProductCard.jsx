import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {useDispatch} from "react-redux"
import { favorited } from "../redux/reducers/productReducer";
import { addToFavorite } from "../redux/reducers/favoriteReducer";
const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  const [selectedFavorite, setSelectedFavorite] = useState(false);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PDetail', {item})}
      style={{
        width: wp(44),
        marginBottom: 25,
      }}
    >
      <Image
        style={{
          width: wp(44),
          height: wp(55),
          resizeMode: "cover",
          borderRadius: 10,
        }}
        source={item.img}
      />
      <View className="flex-row justify-between items-center px-2 mt-1">
        <Text
          style={{
            fontFamily: "bold",
            fontSize: wp(4),
          }}
        >
          {item.price} $
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(favorited(item))
            dispatch(addToFavorite(item))
          }}
        >
          {item.favorited ? (
            <Ionicons name="ios-heart" size={24} color="red" />
          ) : (
            <Ionicons name="heart-outline" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: "semiBold",
          fontSize: wp(4),
        }}
        className="lowercase px-2"
      >
        {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

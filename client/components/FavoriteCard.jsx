import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { favorited, incrementQty } from "../redux/reducers/productReducer";
import { addToFavorite } from "../redux/reducers/favoriteReducer";
import { useNavigation } from "@react-navigation/native";
import { addToCart } from "../redux/reducers/cartReducer";
const FavoriteCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  }; 
  return (
    <View style={{height: wp(86)}} className='mb-4'>
      <TouchableOpacity
        onPress={() => navigation.navigate("PDetail", { item })}
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
              dispatch(favorited(item));
              dispatch(addToFavorite(item));
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
      <TouchableOpacity

          onPress={() => handleAddToCart(item)}
          style={{ width: wp(44), height: wp(12), backgroundColor: "#090a0a", }}
          className="flex-row items-center space-x-2 justify-center rounded-xl absolute bottom-0"
        >
          <Feather name="shopping-cart" size={24} color="white" />
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
    </View>
  );
};

export default FavoriteCard;

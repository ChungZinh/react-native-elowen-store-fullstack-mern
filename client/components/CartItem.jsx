import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

// import { decrementQty, incrementQty } from "../redux/reducers/productReducer";
import {
  decrementQuantity,
  incrementQuantity,
} from "../redux/reducers/cartReducer";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View className="px-2 rounded-xl mb-6 bg-neutral-200 py-2 ">
      <View className="flex-row space-x-4">
        <Image
          style={{
            width: wp(25),
            height: wp(35),
            backgroundColor: "black",
            borderRadius: wp(3),
            resizeMode: "cover",
          }}
          source={item.img}
        />
        <View className="justify-between py-1">
          <Text
            style={{
              width: wp(50),
              fontFamily: "regular",
              textTransform: "lowercase",
              fontSize: wp(4),
            }}
          >
            {item.name}
          </Text>
          <View className="flex-row items-center space-x-6">
            <View className="flex-row items-center space-x-4">
              <Text>Color:</Text>
              <View
                style={{
                  width: wp(5),
                  height: wp(5),
                  backgroundColor: "black",
                  borderRadius: wp(3),
                }}
              />
            </View>

            <View className="flex-row items-center space-x-4">
              <Text>Size:</Text>
              <Text>XS</Text>
            </View>
          </View>
          <View>
            <Text
              style={{ fontFamily: "semiBold", fontSize: wp(5), color: "red" }}
            >
              {item.price}$
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => removeFromCart(item)}
        className="absolute right-2 top-2"
      >
        <Feather name="x" size={28} color="black" />
      </TouchableOpacity>

      <View
        className="flex-row space-x-2  border-neutral-200, rounded-lg justify-center items-center absolute bottom-2 right-2"
        style={{ width: wp(30), height: wp(10), borderWidth: 1 }}
      >
        <TouchableOpacity
          onPress={
            () => incrementQuantity(item)
            // dispatch(incrementQty(item));
          }
          className="mr-3"
        >
          <Feather name="minus" size={24} color="black" />
        </TouchableOpacity>
        <TextInput value={item.quantity.toString()} />
        <TouchableOpacity
          onPress={() => {
            dispatch(decrementQuantity(item));
            // dispatch(decrementQty(item));
          }}
        >
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

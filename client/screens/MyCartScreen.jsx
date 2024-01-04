import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from "../redux/reducers/cartReducer";
import { decrementQty } from "../redux/reducers/productReducer";
const MyCartScreen = () => {
  const carts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  var total = 0;
  carts.forEach((item) => {
    return total += parseFloat((item.price * item.quantity).toFixed(2));
  });
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between items-center px-4">
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text style={{ fontFamily: "semiBold", fontSize: wp(5) }}>Cart</Text>
        <TouchableOpacity>
          <Feather name="search" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView className="pt-6 px-4" style={{ marginBottom: hp(16.5) }}>
        <Text className="text-center mb-6">
          You have {carts.length} products in your Cart
        </Text>
        <FlatList
          data={carts}
          renderItem={({ item }) => {
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
                        style={{
                          fontFamily: "semiBold",
                          fontSize: wp(5),
                          color: "red",
                        }}
                      >
                        {(item.price * item.quantity).toFixed(2)}$
                      </Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart(item))}
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
                      () => dispatch(decrementQuantity(item))
                      // dispatch(incrementQty(item));
                    }
                    className="mr-3"
                  >
                    <Feather name="minus" size={24} color="black" />
                  </TouchableOpacity>
                  <TextInput value={item.quantity.toString()} />
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}
                  >
                    <Feather name="plus" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>

      <View
        style={{ height: hp(16) }}
        className="absolute bottom-0 bg-neutral-200 space-y-4"
      >
        <View className="px-4 mt-2 space-y-2">
          <View className="flex-row justify-between">
            <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Total:</Text>
            <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>
              {total}$
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Saving Applied</Text>
            <Text>0$</Text>
          </View>
        </View>
        <View
          style={{
            width: wp(100),
          }}
          className="px-4 mb-4"
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: hp(5.5),
              backgroundColor: "#090a0a",
            }}
            className="flex-row items-center space-x-2 justify-center rounded-xl"
          >
            <Feather name="shopping-cart" size={24} color="white" />
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyCartScreen;

import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import FavoriteCard from "../components/FavoriteCard";
import { useNavigation } from "@react-navigation/native";
const FavoriteScreen = () => {
  const carts = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.favorite.favorite);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-row justify-center items-center" >
        <TouchableOpacity className="flex-row items-center space-x-3 absolute left-4">
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: wp(4.5),
            fontFamily: "semiBold",
          }}
        >
          Favorites
        </Text>
        <View className="flex-row items-center space-x-3 absolute right-4">
          <TouchableOpacity>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
          >
            {carts.length > 0 ? (
              <Text
                style={{
                  right: -4,
                  top: -4,
                  width: 12,
                  height: 12,
                  backgroundColor: "red",
                  fontSize: wp(2),
                  fontWeight: "bold",
                  color: "white",
                  zIndex: 1000,
                }}
                className="absolute rounded-full text-center"
              >
                {carts.length}
              </Text>
            ) : null}
            <Feather name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View className='px-4' style={{marginTop: hp(6), paddingBottom:  hp(14)}}>
        <FlatList
          data={favorites.filter((favorites) => favorites.favorited === true)}
          renderItem={({ item }) => {
            return <FavoriteCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

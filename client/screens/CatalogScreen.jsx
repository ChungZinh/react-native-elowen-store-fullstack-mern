import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { catalog } from "../constants";
import CatalogCard from "../components/CatalogCard";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const CatalogScreen = () => {
  const carts = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();

  const [showCatalog, setShowCatalog] = useState(false);
  const [cart, setCart] = useState([]);
  const [position, setPosition] = useState();
  return (
    <SafeAreaView>
      <View className="flex-row justify-center items-center">
        <TouchableOpacity className="flex-row items-center space-x-3 absolute left-4">
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: wp(4.5),
            fontFamily: "semiBold",
          }}
        >
          Catalog
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

      {showCatalog ? (
        <View>
          <View className="flex-row items-center my-2">
            <TouchableOpacity
              style={{
                height: hp(5),
                borderBottomWidth: 0.5,
                borderRightWidth: 0.5,
                borderColor: "#c3c3c3",
              }}
              className="flex-1 justify-center items-center flex-row space-x-3"
            >
              <AntDesign name="filter" size={24} color="black" />
              <Text style={{ fontSize: wp(4), fontFamily: "medium" }}>
                Filter
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: hp(5),
                borderBottomWidth: 0.5,
                borderLeftWidth: 0.5,
                borderColor: "#c3c3c3",
              }}
              className="flex-1 justify-center items-center flex-row space-x-3"
            >
              <Ionicons name="md-options-outline" size={24} color="black" />
              <Text style={{ fontSize: wp(4), fontFamily: "medium" }}>
                Popular
              </Text>
            </TouchableOpacity>
          </View>

          <View className="px-4" style={{ marginBottom: wp(70) }}>
            <FlatList
              data={catalog[position].products}
              renderItem={({ item }) => {
                return <ProductCard item={item} />;
              }}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      ) : (
        <View className="px-4 mt-8" style={{ marginBottom: wp(18) }}>
          <FlatList
            data={catalog}
            renderItem={({ item }) => {
              return (
                <CatalogCard
                  onPress={() => {
                    setShowCatalog(!showCatalog);
                    setPosition(item.id);
                  }}
                  item={item}
                />
              );
            }}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CatalogScreen;

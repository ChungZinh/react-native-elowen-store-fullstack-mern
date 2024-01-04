import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather, Ionicons } from "@expo/vector-icons";
import { categories, highlight, products } from "../constants";
import HighlightCard from "../components/HighlightCard";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/reducers/productReducer";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const product = useSelector((state) => state.product.product);
  const carts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(()=> {
    if(product.length > 0) return;

    const fetchProduct = () => products.map((item) => dispatch(getProducts(item)))
    fetchProduct();
  },[])


  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mb-16">
        <View className="justify-center items-center px-4 mt-2">
          <Text style={{ fontFamily: "semiBold", fontSize: wp(5) }}>Elowen</Text>
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

        {/* HIGHLIGHT */}

        <View className=" mt-6">
          <FlatList
            data={highlight}
            renderItem={({ item }) => {
              return <HighlightCard item={item} />;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* THUMBNAIL */}

        <View className="mt-8 mb-6">
          <Image
            style={{ width: wp(100) }}
            source={require("../assets/images/thumbnail.png")}
          />
        </View>

        {/* CATEGORIES */}

        <View className="px-4 space-y-3">
          <Text style={{ fontFamily: "bold", fontSize: wp(5) }}>
            Categories
          </Text>

          <View className="">
            <FlatList
              data={categories}
              renderItem={({ item }) => {
                let isSelected = item.name === selectedCategory;
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(item.name)}
                    className="mr-4 justify-center items-center space-y-1 pb-2.5"
                  >
                    <Text
                      style={{
                        fontFamily: "regular",
                        fontSize: wp(3.5),
                        color: isSelected ? "black" : "#a3a3a3",
                      }}
                    >
                      {item.name}
                    </Text>
                    {isSelected ? (
                      <View
                        className="absolute"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: "black",
                          borderRadius: 10,
                          bottom: 2,
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <FlatList
              data={product}
              renderItem={({ item }) => {
                return <ProductCard item={item} />;
              }}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

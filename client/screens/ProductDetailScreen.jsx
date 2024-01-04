import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { products, size } from "../constants";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";
import { favorited, incrementQty} from "../redux/reducers/productReducer";
import { addToFavorite } from "../redux/reducers/favoriteReducer";
const ProductDetailScreen = ({ route }) => {
  const [selectedColor, setSelectedColor] = useState("#e3e3e3");
  const [selectedSize, setSelectedSize] = useState("");
  const [moreDesc, setMoreDesc] = useState(false);
  const [moreReviews, setMoreReviews] = useState(false);
  const [count, setCount] = useState(1);
  const [selectedFavorite, setSelectedFavorite] = useState(false);
  const colors = ["#e3e3e3", "#3c302e", "#d2a916"];
  const { item } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };
  const handleFavorites = (item) => {
    dispatch(addToFavorite(item))
    dispatch(favorited(item));
  }

  const favorite = useSelector((state) => state.favorite.favorite);
  console.log("fv",favorite);
  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <View
          className="px-4 flex-row items-center justify-between"
          style={{ zIndex: 1000, marginTop: hp(6), marginBottom: hp(45) }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} className="">
            <Ionicons name="chevron-back" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="right-0">
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          className="absolute"
          source={item.img}
          style={{ width: wp(100), height: hp(55), resizeMode: "cover" }}
        />

        <View className="border-b-0.5 border-neutral-400">
          <View className="px-4 mt-4 flex-row justify-between items-center">
            <Text
              style={{
                fontSize: wp(5),
                width: wp(70),
                fontFamily: "semiBold",
                textTransform: "lowercase",
              }}
            >
              {item.name}
            </Text>

            <TouchableOpacity
              onPress={() =>handleFavorites(item)}
            >
              {item.favorited ? (
                <Ionicons name="heart" size={24} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-center px-4 mt-4 mb-4">
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity className="flex-row">
                <AntDesign name="star" size={18} color="black" />
                <AntDesign name="star" size={18} color="black" />
                <AntDesign name="star" size={18} color="black" />
                <AntDesign name="star" size={18} color="black" />
                <AntDesign name="star" size={18} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: wp(4),
                  fontFamily: "semiBold",
                  marginBottom: 4,
                }}
              >
                5,0
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: wp(5),
                  fontFamily: "semiBold",
                  color: "red",
                }}
              >
                {item.price}$
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-4 space-y-6">
          {/* COLOR */}

          <View className="px-4">
            <Text
              style={{
                fontSize: wp(5),
                fontFamily: "semiBold",
              }}
            >
              Color
            </Text>

            <View className="flex-row space-x-1.5 items-center mt-2">
              {colors.map((item, index) => {
                let isSelected = item === selectedColor;
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedColor(item)}
                    key={index}
                    className="justify-center items-center"
                    style={{
                      width: wp(12),
                      height: wp(12),
                      backgroundColor: item,
                      borderRadius: wp(6),
                    }}
                  >
                    {isSelected ? (
                      <AntDesign name="check" size={24} color="black" />
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* SIZE */}

          <View className="px-4 space-y-4">
            <Text
              style={{
                fontSize: wp(5),
                fontFamily: "semiBold",
              }}
            >
              Size
            </Text>

            <View className="flex-row items-center space-x-3">
              {size.map((item, index) => {
                let isSelected = item === selectedSize;
                return (
                  <TouchableOpacity
                    onPress={() => setSelectedSize(item)}
                    className="justify-center items-center"
                    key={index}
                    style={{
                      width: wp(12),
                      height: wp(12),
                      borderRadius: 5,
                      backgroundColor: isSelected ? "#a3a3a3" : "#e3e3e3",
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* DESCRIPTION */}

          <View className="px-4 space-y-2">
            <View className="flex-row justify-between items-center">
              <Text
                style={{
                  fontSize: wp(5),
                  fontFamily: "semiBold",
                }}
              >
                Description
              </Text>

              <TouchableOpacity onPress={() => setMoreDesc(!moreDesc)}>
                <MaterialIcons
                  name="expand-more"
                  size={30}
                  color="black"
                  style={{
                    transform: [{ rotate: moreDesc ? "180deg" : "0deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>
            {moreDesc ? (
              <View>
                <Text style={{ textAlign: "justify" }}>{item.description}</Text>
              </View>
            ) : null}
          </View>

          {/* CUSTOMER REVIEWS */}

          <View className="px-4">
            <View className="flex-row justify-between items-center">
              <Text
                style={{
                  fontSize: wp(5),
                  fontFamily: "semiBold",
                }}
              >
                Customer reviews
              </Text>
              <TouchableOpacity onPress={() => setMoreReviews(!moreReviews)}>
                <MaterialIcons
                  name="expand-more"
                  size={30}
                  color="black"
                  style={{
                    transform: [{ rotate: moreReviews ? "180deg" : "0deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* SIMILAR PRODUCTS */}

          <View className="space-y-6">
            <Text
              className="px-4"
              style={{
                fontSize: wp(5),
                fontFamily: "semiBold",
              }}
            >
              Similar products
            </Text>

            <View className="">
              <FlatList
                data={products}
                renderItem={({ item }) => {
                  return (
                    <View className="ml-4">
                      <ProductCard item={item} />
                    </View>
                  );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* WE THINK YOU'LL LOVE */}

          <View>
            <Text
              className="px-4"
              style={{
                fontSize: wp(5),
                fontFamily: "semiBold",
              }}
            >
              We think you'll love
            </Text>

            <View className="">
              <FlatList
                data={products}
                renderItem={({ item }) => {
                  return (
                    <View className="ml-4">
                      <ProductCard item={item} />
                    </View>
                  );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="flex-row items-center justify-between px-4 py-2 bg-transparent">
        <View
          className="flex-row space-x-2  border-neutral-200, rounded-lg justify-center items-center bg-white"
          style={{ width: wp(35), height: wp(12), borderWidth: 1 }}
        >
          <TouchableOpacity
            onPress={() => (count <= 0 ? setCount(0) : setCount(count - 1))}
            // onPress={() => dispatch(removeProduct(item))}
            className="mr-3"
          >
            <Feather name="minus" size={24} color="black" />
          </TouchableOpacity>
          <TextInput value={count.toString()} />
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Feather name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={{ width: wp(50), height: wp(12), backgroundColor: "#090a0a" }}
          className="flex-row items-center space-x-2 justify-center rounded-xl"
        >
          <Feather name="shopping-cart" size={24} color="white" />
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

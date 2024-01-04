import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Button = ({ type, color, title, children, textColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: color }}
      className="justify-center rounded-md shadow-sm shadow-neutral-50 mb-4  items-center border-0.5 border-neutral-300 py-3 "
    >
      <Text style={{ color: textColor }}>{title}</Text>
      {type === "icon" ? (
        <View className="absolute left-4">{children}</View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;

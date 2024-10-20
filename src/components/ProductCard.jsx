import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles/productCard.style";
import { TouchableOpacity } from "react-native";

const ProductCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <Image style={styles.image} source={{ uri: item.image }} />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>
          {item.title.length > 37
            ? item.title.slice(0, 37) + "..."
            : item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

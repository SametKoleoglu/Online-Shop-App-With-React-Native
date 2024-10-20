import { FlatList } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, navigation }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      numColumns={2}
      renderItem={({ item }) => (
        <ProductCard item={item} navigation={navigation} />
      )}
    />
  );
};

export default ProductList;

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ProductDetailCard } from "../components";
import { ScrollView } from "react-native";

const ProductDetails = ({ navigation, route }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title:
        item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title,
      headerBackTitle: item.category,
    });
  });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <ProductDetailCard item={item} />
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});

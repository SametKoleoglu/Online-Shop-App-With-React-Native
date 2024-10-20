import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ProductDetailCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Product Details : </Text>
        <View style={styles.subContainer}>
          <Text>
            <Text style={styles.label}>Name : </Text>
            {item.title}
          </Text>
          <Text>
            <Text style={styles.label}>Description : </Text>
            {item.description}
          </Text>
          <Text>
            <Text style={styles.label}>Category : </Text>
            {item.category}
          </Text>
          <Text>
            <Text style={styles.label}>Price : </Text>${item.price}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.label}>Rating :</Text>
            <FontAwesome name="star" color={"gold"} size={20} />
            <Text>{item.rating.rate}</Text>
            <Text>({item.rating.count})</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.8,
    gap: 10,
    paddingVertical: 20,
  },
  image: {
    width: "90%",
    height: "30%",
    borderRadius: 40,
    alignSelf: "center",
    resizeMode: "contain",
  },
  detailsContainer: {
    height: "50%",
    marginHorizontal: 20,
    marginVertical: 10,
    gap:10
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    paddingTop: 10,
  },
  subContainer: {
    margin: 10,
    gap: 10,
  },
  label: { fontWeight: "600", fontSize: 17 },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

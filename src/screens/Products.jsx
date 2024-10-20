import { Alert, SafeAreaView, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { ProductList } from "../components";

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); // Veriyi state'e at
      setLoading(false);
    } catch (error) {
      Alert.alert("Something went wrong!", error.message);
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect ile bileşen yüklendiğinde verileri çek
  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <LottieView
          autoPlay
          style={{
            width: 100,
            height: 100,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../assets/jsons/Animation - 1729318084497.json")}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ProductList products={products} navigation={navigation} />
    </View>
  );
};

export default Products;

import { Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { theme } from "../constants/theme";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../styles/headings.style";
import { useNavigation } from "@react-navigation/native";
import ProductList from "./ProductList";
import useFetchProducts from "../hooks/fetchProducts";
import Loading from "./Loading";

const HomeHeading = () => {
  const { data, loading, error } = useFetchProducts();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <Entypo name="grid" size={24} color={theme.colors.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        {
          loading && (
            <View style={styles.loadingContainer}>
              <Loading  />
            </View>
          )
        }
        <ProductList products={data} navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeHeading;

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "../constants/theme";
import { sliderData } from "../utils/data";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";

const { width } = Dimensions.get("window");

const HomeCarousel = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data); // Veriyi state'e at
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect ile bileşen yüklendiğinde verileri çek
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          nestedScrollEnabled
          data={sliderData}
          decelerationRate={"fast"}
          renderItem={({ item }) => (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
          style={{ width: width }}
        />
      </View>
      <Text style={styles.categoryText}>Categories</Text>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={{
            gap: 20,
          }}
          renderItem={({ item }) =>
            loading ? (
              <Loading />
            ) : (
              <CategoryCard
                onPress={() =>
                  navigation.navigate("CategoryProducts", {
                    name: item,
                  })
                }
                item={item}
              />
            )
          }
        />
      </View>
    </View>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "100%",
    paddingHorizontal: theme.sizes.large,
    gap: 25,
    paddingVertical: theme.sizes.large,
  },
  sliderContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  categoryText: {
    fontSize: theme.sizes.xLarge,
    fontWeight: "bold",
    color: theme.colors.title,
  },
  categoryContainer: {
    width: "100%",
    height: "100%",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: width, // Görselin tam genişlikte olmasını sağlar
    height: 250, // İstenilen yükseklik
    resizeMode: "contain", // Görselin boyutlandırılması
  },
});

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/welcomeView.style";

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title("#0c0c0c")}>Find The Most</Text>
        <Text style={styles.title(colors.title, 10)}>Luxurious Furniture</Text>
      </View>

      <View style={styles.searchBar}>
        <TouchableOpacity onPress={{}}>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="What are you looking for ?"
            placeholderTextColor={colors.white}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.searchButton}>
          <Ionicons name="camera-outline" size={32} color={colors.white} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeView;

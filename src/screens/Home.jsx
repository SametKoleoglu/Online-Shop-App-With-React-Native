import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { HomeCarousel, HomeProducts, WelcomeView } from "../components";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <WelcomeView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <HomeCarousel navigation={navigation} />
        <HomeProducts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

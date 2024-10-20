import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryProducts, Home, ProductDetails, Products } from "../screens";
import { theme } from "../constants/theme";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 16,
        },
        headerTitleStyle: {
          color: theme.colors.title,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../screens";

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

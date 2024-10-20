import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../screens";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

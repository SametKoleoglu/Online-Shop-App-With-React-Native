import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../screens";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

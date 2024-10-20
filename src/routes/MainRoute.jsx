import { NavigationContainer } from "@react-navigation/native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import TabRoute from "./TabRoute";

SplashScreen.preventAutoHideAsync();

export default function MainRoute() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Events Triggered!!!", fontsLoaded);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts not loaded!");
    return null;
  } else {
    console.log("Fonts loaded!");
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <TabRoute/>
    </NavigationContainer>
  );
}

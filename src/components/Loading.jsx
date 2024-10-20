import React from "react";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <LottieView
      source={require("../../assets/jsons/Animation - 1729318084497.json")}
      autoPlay
      loop
      style={{ width: 50, height: 50 }}
    />
  );
}

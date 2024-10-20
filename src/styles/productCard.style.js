import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../constants/theme";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    height: height / 3,
    margin: 10,
    borderRadius: theme.sizes.small,
    marginVertical: theme.sizes.medium,
    gap:10
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 2,
  },
  price: {
    marginBottom: theme.sizes.small,
  },
  name: {
    fontSize: theme.sizes.medium,
    fontFamily: "Roboto_700Bold",
  },
});

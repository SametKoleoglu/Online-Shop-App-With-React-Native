import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.sizes.medium,
    marginTop: theme.sizes.large,
    gap: 15,
  },
  headerTitle: {
    fontSize: theme.sizes.xLarge - 5,
    fontFamily: "Roboto_700Bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productsContainer: {},
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

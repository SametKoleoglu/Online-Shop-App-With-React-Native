import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    top: theme.sizes.small,
  },
  title: (color, top = 0) => ({
    color: color,
    fontSize: 40,
    top: top,
    marginHorizontal: 16,
  }),
  searchBar: {
    backgroundColor: colors.medium,
    height: 50,
    borderRadius: 10,
    marginVertical: theme.sizes.large,
    marginHorizontal: theme.sizes.small,
    paddingLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  searchWrapper: {
    flex: 1,
    borderRadius: 10,
  },
  searchIcon: {
    color: colors.white,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    color: colors.white,
  },
  searchButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 50,
    height: 50,
  },
});

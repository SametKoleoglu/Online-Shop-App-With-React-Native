import { StatusBar } from "expo-status-bar";
import MainRoute from "./src/routes/MainRoute";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MainRoute />
    </>
  );
}

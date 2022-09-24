import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import UserIdentification from "./src/screens/UserIdentification";
import Confirmation from "./src/screens/Confirmation";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Confirmation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

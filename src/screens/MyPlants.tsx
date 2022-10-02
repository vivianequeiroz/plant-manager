import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../components/Headers";
import colors from "../styles/colors";

export function MyPlants() {
  return (
    <View style={styles.container}>
      <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
});

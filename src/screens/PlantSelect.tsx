import React from "react";

import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Text>Select plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.background,
  },
});

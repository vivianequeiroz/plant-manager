import { useRoute } from "@react-navigation/core";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";

import waterdrop from "../../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantParams {
  plant: {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as PlantParams;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} height={150} width={150}></SvgFromUri>

          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterdrop} style={styles.tipImage} />
            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>

          <Text style={styles.alertLabel}>
            Choose the best time to be remembered:
          </Text>

          <Button title="Register plant" onPress={() => {}} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    colors: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    jystifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 16,
    borderRadius: 20,
    position: "relative",
    bottom: 70,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    fontSize: 14,
    lineHeight: 16,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    fontSize: 12,
    marginBottom: 5,
  },
});

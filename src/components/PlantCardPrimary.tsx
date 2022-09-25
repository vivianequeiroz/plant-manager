import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri width={90} height={90} uri={data.photo} />
        <Text style={styles.text}>{data.name}</Text>
      </RectButton>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    width: "90%",
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
});

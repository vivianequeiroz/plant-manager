import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
  RectButtonProps,
} from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentChipsProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentChips({
  title,
  active = false,
  ...rest
}: EnvironmentChipsProps) {
  return (
    <GestureHandlerRootView>
      <RectButton
        style={[styles.container, active && styles.containerActive]}
        {...rest}
      >
        <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
      </RectButton>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

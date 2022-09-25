import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import profileImg from "../../assets/pyon.png";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>Pyon</Text>
      </View>
      <Image source={profileImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 36,
  },
});

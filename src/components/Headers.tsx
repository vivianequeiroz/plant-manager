import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import profileImg from "../../assets/pyon.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function recoverUsernameFromPhoneStorage() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    recoverUsernameFromPhoneStorage();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.userName}>{userName}</Text>
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

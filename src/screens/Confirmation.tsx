import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import homeImage from "../../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";

export default function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>We're done!</Text>
        <Text style={styles.subtitle}>
          Let's take care of your plants very carefully.
        </Text>
        <View style={styles.footer}>
          <Button title="Start" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: "center",
    margin: 38,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 10,
    color: colors.heading,
    fontfamily: fonts.text,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});

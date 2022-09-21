import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import homeImage from "../../assets/watering.png";
import colors from "../styles/colors";

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Easily {"\n"} manage your {"\n"} plants
      </Text>
      <Image source={homeImage} style={styles.image} resizeMode="contain" />
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remember you
        whenever you need.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonIcon}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    margin: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
    paddingHorizontal: 16,
    margin: 20,
    width: 56,
    height: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
  },
});

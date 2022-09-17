import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import homeImage from "./assets/watering.png";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Easily {"\n"} manage your {"\n"} plants
      </Text>
      <Image source={homeImage} />
      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We take care to remember you
        whenever you need.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonContent}> {">"} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontweight: "bold",
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
  buttonContent: {
    color: colors.white,
    fontSize: 24,
  },
});

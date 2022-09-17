import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import homeImage from "./assets/watering.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Easily manage your plants</Text>
      <Image source={homeImage} />
      <Text>
        Don't forget to water your plants anymore. We take care to remember you
        whenever you need.
      </Text>
      <TouchableOpacity>
        <Text>button will come here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

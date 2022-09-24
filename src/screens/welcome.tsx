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
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation<any>();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Easily manage {"\n"} your plants</Text>
        <Image source={homeImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>
          Don't forget to water your plants anymore. We take care to remember
          you whenever you need.
        </Text>
        <TouchableOpacity
          onPress={handleStart}
          style={styles.button}
          activeOpacity={0.7}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    margin: 42,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontfamily: fonts.text,
    lineHeight: 20,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 16,
    paddingHorizontal: 14,
    margin: 20,
    width: 56,
    height: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
  },
});

import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IConfirmation } from "../models/IConfirmation";

const emojis = {
  hug: "🤗",
  smile: "😄",
};

export default function Confirmation() {
  const navigation = useNavigation<any>();
  const routes = useRoute();
  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as IConfirmation;

  function handleStart() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleStart} />
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

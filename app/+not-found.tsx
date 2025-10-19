import { Text, View, StyleSheet } from "react-native";
import { Link , Stack} from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Go to Home Screen!
            </Link>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

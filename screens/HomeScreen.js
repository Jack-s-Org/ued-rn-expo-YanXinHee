import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("@/assets/image/bg2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Find the perfect concert</Text>
        <Text style={styles.subtitle}>Help us find concerts just for you</Text>

        <TouchableOpacity
          style={[styles.button, styles.filterButton]}
          onPress={() => {
            navigation.navigate("Discover");
          }}
        >
          <Text style={[styles.buttonText, styles.filterButtonText]}>
            Filters
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.trackButton]}>
          <Text style={[styles.buttonText, styles.trackButtonText]}>
            Track Artists
          </Text>
        </TouchableOpacity>

        {/* Sign Out Text */}
        <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 32,
    marginTop: -100,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    marginBottom: 100,
    marginTop: -20,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#FF0898",
  },
  trackButton: {
    backgroundColor: "#FF0898",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  filterButtonText: {
    color: "#FFFFFF",
  },
  trackButtonText: {
    color: "#FFFFFF",
  },
  signOutText: {
    marginTop: 20,
    color: "#FFFFFF",
    textDecorationLine: "underline",
  },
});

export default HomeScreen;

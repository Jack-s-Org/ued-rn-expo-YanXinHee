import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("@/assets/image/background2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Log in to Songkick</Text>
        <Text style={styles.subtitle}>Return to concert greatness</Text>
        <Text style={styles.subtitle2}>Continue with</Text>

        <TouchableOpacity
          style={[styles.button, styles.spotifyButton]}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Text style={[styles.buttonText, styles.spotifyButtonText]}>
            Spotify
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.appleButton]}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Text style={[styles.buttonText, styles.appleButtonText]}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.emailButton]}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Text style={[styles.buttonText, styles.emailButtonText]}>
            Email or username
          </Text>
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
  subtitle2: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
    marginTop: 30,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 10,
  },
  spotifyButton: {
    backgroundColor: "#1DB954",
  },
  appleButton: {
    backgroundColor: "#D4D4D4",
  },
  emailButton: {
    backgroundColor: "#5F5F5F",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  spotifyButtonText: {
    color: "#FFFFFF",
  },
  appleButtonText: {
    color: "#000000",
  },
  emailButtonText: {
    color: "#FFFFFF",
  },
});

export default SignInScreen;

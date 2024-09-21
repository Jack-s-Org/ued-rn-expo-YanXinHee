import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const InfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {/* Top Image */}
        <View style={styles.topImageContainer}>
          <Image
            source={require("@/assets/image/TopImage.png")}
            style={styles.topImage}
            resizeMode="cover"
          />
        </View>

        <Image
          source={require("@/assets/image/asset5.png")}
          style={styles.scrollableImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Ticket Pricing</Text>

        <Image
          source={require("@/assets/image/asset6.png")}
          style={styles.scrollableImage}
          resizeMode="contain"
        />

        <Image
          source={require("@/assets/image/asset7.png")}
          style={styles.scrollableImage}
          resizeMode="contain"
        />

        {/* Buttons at the bottom */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Purchase Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => navigation.navigate("SuccessScreen")}
          >
            <Text style={styles.buttonText}>Book for Live Stream</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backIconContainer: {
    position: "absolute",
    top: 70,
    left: 0,
    zIndex: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContainer: {
    alignItems: "center",
  },
  topImageContainer: {
    width: "100%",
    height: screenHeight * 0.3,
  },
  topImage: {
    width: "100%",
    height: "110%",
  },
  scrollableImage: {
    width: screenWidth,
    height: screenHeight * 0.3,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#14C0FE",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default InfoScreen;

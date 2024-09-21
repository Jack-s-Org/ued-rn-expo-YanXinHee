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
      {/* Fixed back icon, styled similar to ChooseConcertScreen */}
      <View style={styles.backIconContainer}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Scrollable content including images and buttons */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {/* Top Image */}
        <View style={styles.topImageContainer}>
          <Image
            source={require("@/assets/image/TopImage.png")} // Replace with the correct path to TopImage
            style={styles.topImage}
            resizeMode="cover"
          />
        </View>

        {/* First scrollable image - asset5 */}
        <Image
          source={require("@/assets/image/asset5.png")} // Replace with the correct path to asset5
          style={styles.scrollableImage}
          resizeMode="contain"
        />

        {/* Title above asset6 */}
        <Text style={styles.title}>Ticket Pricing</Text>

        {/* Second scrollable image - asset6 */}
        <Image
          source={require("@/assets/image/asset6.png")} // Replace with the correct path to asset6
          style={styles.scrollableImage}
          resizeMode="contain"
        />

        {/* Third scrollable image - asset7 */}
        <Image
          source={require("@/assets/image/asset7.png")} // Replace with the correct path to asset7
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
    backgroundColor: "black", // Set the background color to black
  },
  backIconContainer: {
    position: "absolute",
    top: 70, // Match the position of the ChooseConcertScreen back icon
    left: 0,
    zIndex: 10, // Keep the back icon on top of everything else
  },
  backIcon: {
    width: 40, // Same size as on ChooseConcertScreen
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%", // Make the scrollView full width
  },
  scrollContainer: {
    alignItems: "center",
  },
  topImageContainer: {
    width: "100%",
    height: screenHeight * 0.3, // Adjust TopImage height (30% of the screen height)
  },
  topImage: {
    width: "100%",
    height: "110%", // TopImage takes full space within its container
  },
  scrollableImage: {
    width: screenWidth,
    height: screenHeight * 0.3, // Each image is 30% of the screen height
    marginBottom: 20, // Add spacing between images
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10, // Space above and below the title
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20, // Add some padding to the sides
    marginBottom: 20, // Space at the bottom for the buttons
  },
  button: {
    backgroundColor: "#333", // Primary button color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15, // Space between the two buttons
    width: "100%", // Make the button full width
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#14C0FE", // Secondary button color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "100%", // Make the button full width
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default InfoScreen;

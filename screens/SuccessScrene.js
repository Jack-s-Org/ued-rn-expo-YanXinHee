import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CommonActions } from "@react-navigation/native";

const SuccessScreen = ({ navigation }) => {
  const [calendarAdded, setCalendarAdded] = useState(false);

  const handleAddToCalendar = () => {
    setCalendarAdded(true);
  };

  const handleCheckMyTickets = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Tickets" }],
      })
    );
  };

  return (
    <ImageBackground
      source={require("@/assets/image/background2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backIconContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          source={require("@/assets/image/asset9.png")}
          style={styles.topImage}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/image/asset10.png")}
          style={styles.topImage}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Your booking is confirmed!</Text>
        <Image
          source={require("@/assets/image/asset8.png")}
          style={styles.middleImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddToCalendar}>
          <Text style={styles.buttonText}>
            {calendarAdded ? "Added to Calendar" : "Add to Calendar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCheckMyTickets}>
          <Text style={styles.checkTicketsText}>Check My Tickets</Text>
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
  topImage: {
    width: "80%",
    height: 100,
    marginBottom: 0,
  },
  middleImage: {
    width: "150%",
    height: 400,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#FF0898",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  checkTicketsText: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default SuccessScreen;

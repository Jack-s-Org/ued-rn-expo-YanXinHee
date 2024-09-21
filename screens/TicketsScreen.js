import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TicketsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>My E-Tickets</Text>
      </View>
      <Image
        source={require("@/assets/image/asset11.png")}
        style={styles.asset}
        resizeMode="contain"
      />
      <Image
        source={require("@/assets/image/asset12.png")}
        style={styles.asset}
        resizeMode="contain"
      />
      <View style={styles.dashLine} />
      <Image
        source={require("@/assets/image/asset13.png")}
        style={styles.asset}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
  },
  asset: {
    width: "90%", // Adjust as needed
    height: 200, // Adjust as needed
    marginBottom: 20,
  },
  dashLine: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 20,
  },
});

export default TicketsScreen;

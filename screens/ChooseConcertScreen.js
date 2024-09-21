import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ChooseConcertScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <ImageBackground
      source={require("@/assets/image/bg2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIconPlaceholder}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <FontAwesome
              name="search"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {/* ScrollView with adjusted height */}
        <ScrollView
          contentContainerStyle={styles.imageContainer}
          style={styles.scrollView}
        >
          {/* Title Above the Images */}
          <Text style={styles.title}>12 Dec 2024</Text>
          <Text style={styles.subTitle}>Kuala Lumpur, Malaysia</Text>

          <Image
            source={require("@/assets/image/asset1.png")}
            style={styles.image1}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.navigate("InfoScreen")}>
            <Image
              source={require("@/assets/image/asset3.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={require("@/assets/image/asset4.png")}
            style={styles.image3}
            resizeMode="contain"
          />
          <Text style={styles.title}>12 Dec 2024</Text>
          <Text style={styles.subTitle}>Pahang, Malaysia</Text>
          <Image
            source={require("@/assets/image/asset2.png")}
            style={styles.image4}
            resizeMode="contain"
          />
        </ScrollView>
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
  },
  header: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    zIndex: 1,
  },
  backIconPlaceholder: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  scrollView: {
    flex: 1,
    width: "90%",
    marginTop: 0,
    marginBottom: -50,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginVertical: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    marginVertical: 5,
  },
  image1: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginTop: -100,
    marginBottom: -170,
    borderRadius: 10,
  },
  image2: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: -170,
    borderRadius: 10,
  },
  image3: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: -50,
    borderRadius: 10,
  },
  image4: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: -90,
    marginTop: -100,
    borderRadius: 10,
  },
});

export default ChooseConcertScreen;

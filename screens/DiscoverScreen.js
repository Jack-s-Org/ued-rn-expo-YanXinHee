import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";
import { Calendar } from "react-native-calendars"; // Import calendar

const DiscoverScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false); // Toggle for calendar
  const [selectedGenres, setSelectedGenres] = useState([]); // Track selected genres

  const onDayPress = (day) => {
    // Set the date as a Date object
    setDate(new Date(day.dateString));
    setShowCalendar(false); // Close calendar after selecting a date
  };

  const formattedDate = date instanceof Date ? date.toLocaleDateString() : "";
  const toggleGenreSelection = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleGoPress = () => {
    navigation.navigate("ChooseConcertScreen");
  };

  return (
    <ImageBackground
      source={require("@/assets/image/bg2.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backIconPlaceholder}>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
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
            />
          </View>
        </View>

        <View style={styles.dropdownGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedLocation(value)}
              items={[
                { label: "Malaysia", value: "malaysia" },
                { label: "Singapore", value: "singapore" },
                { label: "Indonesia", value: "indonesia" },
                { label: "Thailand", value: "thailand" },
                { label: "Korea", value: "korea" },
                { label: "Japan", value: "japan" },
              ]}
              style={pickerSelectStyles}
              placeholder={{ label: "Select Location", value: null }}
            />
          </View>

          <Text style={styles.label}>Date</Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowCalendar(!showCalendar)}
          >
            <Text style={styles.dateText}>{formattedDate}</Text>
          </TouchableOpacity>

          {showCalendar && (
            <Calendar
              onDayPress={onDayPress}
              markedDates={{ [date]: { selected: true } }}
              style={styles.calendar} // Style for the calendar
            />
          )}

          <Text style={styles.label}>Language</Text>
          <View style={styles.dropdownContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedLanguage(value)}
              items={[
                { label: "English", value: "english" },
                { label: "Malay", value: "malay" },
                { label: "Mandarin", value: "mandarin" },
                { label: "Korean", value: "korean" },
                { label: "Japanese", value: "japanese" },
              ]}
              style={pickerSelectStyles}
              placeholder={{ label: "Select Language", value: null }}
            />
          </View>

          <Text style={styles.label}>Genre</Text>
          <View style={styles.genreButtons}>
            {[
              "Pop",
              "Rock",
              "Jazz",
              "Classical",
              "Hip Hop",
              "Reggae",
              "Blues",
              "Electronic",
              "Country",
              "Metal",
              "Folk",
              "Indie",
            ].map((genre) => (
              <TouchableOpacity
                key={genre}
                style={[
                  styles.genreButton,
                  selectedGenres.includes(genre) && styles.selectedGenreButton,
                ]}
                onPress={() => toggleGenreSelection(genre)}
              >
                <Text
                  style={[
                    styles.genreText,
                    selectedGenres.includes(genre) && styles.selectedGenreText,
                  ]}
                >
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.goButton]}
          onPress={() => navigation.navigate("ChooseConcert")} // Navigate to the concert screen
        >
          <Text style={[styles.buttonText, styles.goButtonText]}>GO</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

// Styles
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#FFFFFF",
    height: 40,
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#FFFFFF",
    height: 40,
  },
});

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
    width: "90%",
    marginTop: 20,
    alignItems: "center",
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
  dropdownGroup: {
    width: "90%",
    marginTop: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 5,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start", // Align text to the left
    paddingHorizontal: 10, // Add padding for aesthetics
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: "black",
  },
  calendar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  genreButtons: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows buttons to wrap to the next line
    justifyContent: "flex-start", // Align buttons to the start
  },
  genreButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 5,
    alignItems: "center",
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  genreText: {
    fontSize: 18,
    color: "white", // White text
  },
  selectedGenreButton: {
    borderColor: "#FFFFFF", // White outline when selected
    shadowOpacity: "100%",
    shadowColor: "#AB38EB", // More pronounced shadow when selected
    backgroundColor: "#AB38EB",
  },
  selectedGenreText: {
    color: "white", // White text when selected
  },
  goButton: {
    backgroundColor: "#14C0FE",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 100,
  },
  goButtonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default DiscoverScreen;

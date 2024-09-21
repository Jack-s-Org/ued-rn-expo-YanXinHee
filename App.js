import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import VideoPlayer from "./components/VideoPlayer";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
    "IBMPlexSerif-Regular": require("./assets/font/IBMPlexSerif-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <Icon name="home" size={50} color="red" />
        <Text style={{ fontFamily: "IBMPlexSerif-Regular", fontSize: 36 }}>
          Hello World!
        </Text> */}
      {/* <VideoPlayer /> */}
      <RootNavigator />
    </SafeAreaProvider>
  );
}

import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import DiscoverScreen from "./DiscoverScreen";
import ChooseConcertScreen from "./ChooseConcertScreen";
import InfoScreen from "./InfoScreen";
import SuccessScreen from "./SuccessScrene";
import TicketsScreen from "./TicketsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="ChooseConcert" component={ChooseConcertScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const CustomDrawerHeader = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ height: 100, display: "flex", justifyContent: "center" }}
    >
      <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu" size={32} />
      </Pressable>
    </SafeAreaView>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={() => props.navigation.replace("SignIn")}
      />
    </DrawerContentScrollView>
  );
}

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const MyProfile = () => {
  return (
    <View>
      <Text>My Profile</Text>
    </View>
  );
};

const SettingsDrawerScreens = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: CustomDrawerHeader }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default SettingsDrawerScreens;

import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerItem } from "@react-navigation/drawer";

export default function AppDrawer({ navigation, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <SafeAreaView>
            <DrawerItem
              label="Settings"
              onPress={() => {
                navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              label="Sign Out"
              onPress={() => {
                navigation.replace("SignIn");
              }}
            />
          </SafeAreaView>
        );
      }}
    >
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={{
              zIndex: 99,
              position: "absolute",
              left: 0,
              top: insets.top,
              padding: 16,
            }}
          >
            <Ionicons name="menu" size={32} />
          </TouchableOpacity>
        )}
      </SafeAreaInsetsContext.Consumer>
      {children}
    </Drawer>
  );
}

import { Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInScreen;

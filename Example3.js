import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const CreateTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Message", [
      {
        text: "Yes",
        onPress: () => console.log("Yes Pressed"),
        style: "cancel",
      },
      { Text: "No", onPress: () => console.log("No Pressed") },
    ]);

  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => alert("Button Tapped")} />
      <Button title="Click Me Alert Message" onPress={CreateTwoButtonAlert} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
} from "react-native";

export default function App() {
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello React Native!</Text>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          blurRadius={0.5}
          fadeDuration={5000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300",
          }}
        />
      </TouchableOpacity>
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

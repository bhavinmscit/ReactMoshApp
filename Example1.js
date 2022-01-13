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
      {/* <Image source={require("./assets/favicon.png")} /> */}
      {/* <TouchableWithoutFeedback onPress={() => console.log('Image Tapped')}> */}
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
      {/* </TouchableWithoutFeedback> */}
      <StatusBar style="auto" />
      <br></br>
      <Button
        title="Click Me"
        onPress={() => console.log("Button Tapped")}
      ></Button>
      {/* <Button
        title="Alert Demo"
        onPress={() =>
          Alert.alert("My Title", "Button Tapped", [
            { text: "Yes", onPress: () => console.log("Button Yes Tapped") },
            { text: "No" },
          ])
        }
      ></Button> */}
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

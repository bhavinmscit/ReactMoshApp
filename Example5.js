import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
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
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            // flex: 1,
            width: 100,
            height: 100,
            //alignSelf: "flex-start",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "gold",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "tomato",
            // flex: 1,
            width: 100,
            height: 100,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 200,
          height: 200,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 200,
          height: 200,
          margin: 20,
        }}
      ></View>
    </View>
  );
}

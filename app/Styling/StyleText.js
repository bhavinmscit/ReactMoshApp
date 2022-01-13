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
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          //   textDecorationLine: "line-through",
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        Hello React Native! Hello React Native! Hello React Native! Hello React
        Native!
      </Text>
    </View>
  );
}

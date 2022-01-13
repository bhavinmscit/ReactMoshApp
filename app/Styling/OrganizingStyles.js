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

import AppText from "../componant/AppTextNew/AppTextNew";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>Hello React Native! OrganizingStyles</AppText>
    </View>
  );
}

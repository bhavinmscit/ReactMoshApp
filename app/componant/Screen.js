import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
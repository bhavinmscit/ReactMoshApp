import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import styles1 from "./styles";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Robot" : "Avenir",
  },
});

export default AppText;

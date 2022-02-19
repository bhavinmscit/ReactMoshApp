import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Robot" : "Avenir",
  },
});

export default AppText;

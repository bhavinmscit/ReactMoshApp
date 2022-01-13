import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "./colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[Styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;

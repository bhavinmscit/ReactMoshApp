import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppTextNew/AppTextNew";

function ErrrorMessage({ error, Visible }) {
  if (!Visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrrorMessage;

import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "./colors";

function ListItemSeparator() {
  return <View style={styles.saparater}></View>;
}

const styles = StyleSheet.create({
  saparater: {
    width: "100%",
    height: 1,
    backgroundColor: colors.gray,
  },
});

export default ListItemSeparator;

import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppTextNew from "./AppTextNew/AppTextNew";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppTextNew style={styles.text}>{item.label}</AppTextNew>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;

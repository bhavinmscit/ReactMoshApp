import React from "react";

import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  // width: "100%",
  //   textInput: {
  //     color: colors.dark,
  //     fontSize: 18,
  //     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //   },
  icon: {
    marginRight: 11,
    justifyContent: "center",
  },
});
export default AppTextInput;

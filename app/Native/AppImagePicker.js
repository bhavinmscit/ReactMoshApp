import React, { useEffect } from "react";
import Screen from "../componant/Screen";
import * as ImagePicker from "expo-image-picker";

function AppImagePicker(props) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(async () => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {},
});

export default AppImagePicker;

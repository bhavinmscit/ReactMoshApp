import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "../componant/Screen";

function AppImagePickerLib(props) {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  useEffect(async () => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error Reading in Image ", error);
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}

export default AppImagePickerLib;

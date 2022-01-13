import React from "react";
import { Image } from "react-native";
import { ImageBackground, StyleSheet, View, Text } from "react-native-web";
const image = {
  uri: "https://i.pinimg.com/564x/89/86/7e/89867ec650f265f6ade0d8af3e884a5e.jpg",
};
const logo = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
};

function WelcomeScreen(props) {
  return (
    // <View style={styles.container}>
    <ImageBackground style={styles.image} resizeMode="cover" source={image}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.text}>Welcome To OPAL</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "white",
    // fontSize: 42,
    // lineHeight: 84,
  },
  registerButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#4ecdc4",
    borderRadius: 50,
    marginBottom: 20,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#fc5c65",
    borderRadius: 50,
    marginBottom: 10,
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;

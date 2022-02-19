import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import Borders from "./app/Styling/Borders";
import Shadows from "./app/Styling/Shadows";
import PaddingMargin from "./app/Styling/PaddingMargin";
import StyleText from "./app/Styling/StyleText";
import Encapsulating from "./app/Styling/Encapsulating";
import StyleIcon from "./app/Styling/StyleIcon";
import PlatformSpecificCode from "./app/Styling/PlatformSpecificCode";
import OrganizingStyles from "./app/Styling/OrganizingStyles";
import AppButtonNew from "./app/Styling/AppButtonNew";
import CardView from "./app/Styling/CardView";
import ListingDetailsScreen from "./app/Styling/ListingDetailsScreen";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import WelcomeNew from "./app/screen/WelcomeNew";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import MessagesScreen from "./app/Lists/MessagesScreen";
import MyAccountScreen from "./app/Lists/MyAccountScreen";
import ListingScreen from "./app/screen/ListingScreen";
import InputText from "./app/InputComponents/InputText";
import AppTextInput from "./app/componant/AppTextInput";
import Screen from "./app/componant/Screen";
import InputSwitch from "./app/InputComponents/InputSwitch";
import AppPicker from "./app/componant/AppPicker";
import AppPickerPage from "./app/InputComponents/AppPickerPage";
import LoginScreen from "./app/screen/LoginScreen";
import LoginFormik from "./app/screen/LoginFormik";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import AppImagePickerLib from "./app/Native/AppImagePickerLib";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  </Screen>
);
const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    // <Screen>
    //   <AppPickerPage></AppPickerPage>
    // </Screen>
    // <LoginFormik />
    // <ListingEditScreen />
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
    // <MessagesScreen />
    <AppImagePickerLib />
  );
}

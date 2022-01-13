import React from "react";
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
import WelcomeScreen from "./app/screen/WelcomeScreen";
import WelcomeNew from "./app/screen/WelcomeNew";

export default function App() {
  return <WelcomeNew></WelcomeNew>;
}

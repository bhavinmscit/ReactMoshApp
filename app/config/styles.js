import { Platform } from "react-native";
import colors from "../componant/colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};


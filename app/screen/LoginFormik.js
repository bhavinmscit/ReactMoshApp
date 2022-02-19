import React from "react";
import { StyleSheet, Image } from "react-native";
import AppButton from "../componant/AppButton";
import AppTextInput from "../componant/AppTextInput";
import Screen from "../componant/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../componant/AppTextNew/AppTextNew";
import ErrrorMessage from "../componant/Forms/ErrorMessage";
import { AppForm, AppFormField, SubmitButton } from "../componant/Forms";
// import AppFormField from "../componant/Forms/AppFormField";
// import SubmitButton from "../componant/Forms/SubmitButton";
// import AppForm from "../componant/Forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          Name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          Name="password"
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;

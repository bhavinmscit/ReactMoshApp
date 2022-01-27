import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import Screen from "../componant/Screen";

function InputText(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <View>
        <Text>{firstName}</Text>
        <TextInput
          keyboardType="ascii-capable"
          clearButtonMode="always"
          secureTextEntry
          maxLength={10}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        ></TextInput>
      </View>
    </Screen>
  );
}

export default InputText;

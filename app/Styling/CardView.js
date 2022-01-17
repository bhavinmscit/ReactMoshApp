import React from "react";
import { View } from "react-native-web";
import Card from "../componant/Card";

function CardView(props) {
  return (
    <>
      <View
        style={{
          backgroundColor: "#f8f4f4",
          padding: 15,
          paddingTop: 70,
        }}
      >
        <Card
          title="Red Jacket for sell"
          subTitle="$100"
          image={require("../assets/jacket.jpg")}
        ></Card>
      </View>
      <View
        style={{
          backgroundColor: "#f8f4f4",
          padding: 15,
        }}
      >
        <Card
          title="couch for sell"
          subTitle="$200"
          image={require("../assets/couch.jpg")}
        ></Card>
      </View>
    </>
  );
}

export default CardView;

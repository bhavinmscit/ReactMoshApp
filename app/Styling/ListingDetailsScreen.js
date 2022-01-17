import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../componant/AppTextNew/AppTextNew";
import colors from "../componant/colors";
import ListItem from "../componant/ListItem";

function ListingDetailsScree(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for Sell</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: { padding: 20 },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScree;

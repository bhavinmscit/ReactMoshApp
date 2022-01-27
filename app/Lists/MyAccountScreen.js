import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../componant/Screen";

import Icon from "../componant/Icon";
import ListItem from "../componant/ListItem";
import colors from "../componant/colors";
import ListItemSeparator from "../componant/ListItemSeparator";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
      {/* <ListItem title="My Title" ImageComonent={<Icon name="email" />} /> */}
      <View style={styles.container}>
        <ListItem
          title="Bhavin Darji"
          subTitle="bddarji@techelecon.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComonent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComonent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
export default MyAccountScreen;

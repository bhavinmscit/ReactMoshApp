import React from "react";
import {
  FlatList,
  //   SafeAreaView,
  StyleSheet,
  //   Platform,
  //   StatusBar,
} from "react-native";
import { View } from "react-native-web";
import ListItem from "../componant/ListItem";
import ListItemSeparator from "../componant/ListItemSeparator";

import Screen from "../componant/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            // onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <View
                style={{
                  backgroundColor: "red",
                  width: 70,
                }}
              ></View>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

import React, { useState } from "react";
import {
  FlatList,
  //   SafeAreaView,
  StyleSheet,
  Text,
  View,
  //   Platform,
  //   StatusBar,
} from "react-native";
import ListItem from "../componant/ListItem";
import ListItemDeleteAction from "../componant/ListItemDeleteAction";
import ListItemSeparator from "../componant/ListItemSeparator";

import Screen from "../componant/Screen";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refressing, setRefressing] = useState(false);
  const handleDelete = (message) => {
    // Delete message from message
    // Delete from server
    // const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPreass={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refressing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

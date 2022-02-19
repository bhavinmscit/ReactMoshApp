import React, { useState } from "react";

import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  placeholder,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {/* <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText> */}
          <MaterialCommunityIcons
            name="chevron-down"
            style={styles.icon}
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,
  },
  // width: "100%",
  //   textInput: {
  //     color: colors.dark,
  //     fontSize: 18,
  //     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //   },
  icon: {
    marginRight: 11,
    justifyContent: "center",
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;

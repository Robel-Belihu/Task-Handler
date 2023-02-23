import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Tasks({ task, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "solid",
    borderRadius: 15,
    borderBottomColor: "purple",
    flexDirection: "row",
    backgroundColor: "purple",
  },
  itemText: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 17,
  },
});

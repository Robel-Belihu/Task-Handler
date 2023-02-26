import { useState } from "react";
import { StyleSheet, View, TextInput, Button, use } from "react-native";

export default function TaskInput({ inputHandler, buttonPressHandler }) {
  const [enteredText, setEnteredText] = useState("");

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="freaking write something"
        onChangeText={inputHandler}
      />
      <Button
        onPress={buttonPressHandler}
        title="ADD THE THING"
        color="purple"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    width: "70%",
    marginRight: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
});

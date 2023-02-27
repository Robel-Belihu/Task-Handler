import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  ImageBackground,
} from "react-native";

export default function TaskInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insert the name of the task"
          onChangeText={props.inputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              onPress={props.buttonPressHandler}
              title="ADD THE THING"
              color="purple"
            />
          </View>
          <View>
            <Button title="Cancel" onPress={props.cancelModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  textInput: {
    borderWidth: 5,
    borderColor: "lightgray",
    width: "90%",
    padding: 12,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 3,
    marginTop: 14,
  },
  btn: {
    width: "30%",
    marginHorizontal: 6,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});

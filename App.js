import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ImageBackground,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Tasks from "./components/Tasks";

const image = {
  uri: "https://images.unsplash.com/photo-1580820267682-426da823b514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [tasks, setTasks] = useState([]);

  //For the input field
  const inputHandler = (value) => {
    setEnteredText(value);
  };

  //For the button
  const buttonPressHandler = (text) => {
    setTasks((currentTasks) => [...currentTasks, enteredText]);
  };
  //For the tasks
  const pressHandler = (key) => {
    setTasks((prevTodo) => {
      return prevTodo.filter((todoItem) => todoItem.key !== key);
    });
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.img}>
      <View style={styles.container}>
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
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.taskItem}>
                  <Text style={styles.taskItemText}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  tasksContainer: {
    flex: 5,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
  taskItem: {
    padding: 20,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "solid",
    borderRadius: 15,
    borderBottomColor: "purple",
    flexDirection: "row",
    backgroundColor: "purple",
  },
  taskItemText: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 17,
    backgroundColor: "purple",
  },
});

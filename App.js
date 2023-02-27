import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  ImageBackground,
} from "react-native";
import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";

const image = {
  uri: "https://images.unsplash.com/photo-1580820267682-426da823b514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
};

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  //For the input field
  const inputHandler = (value) => {
    setEnteredText(value);
  };

  //For the button
  const buttonPressHandler = (text) => {
    setTasks((currentTask) => [
      ...currentTask,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  //For the pressable
  const deleteTaskHandler = (id) => {
    setTasks((currentTask) => {
      return currentTask.filter((Task) => Task.id !== id);
    });
  };
  //Show modal
  const startTaskHandler = () => {
    setVisibleModal(true);
  };
  //Cancel modal
  const cancelModal = () => {
    setVisibleModal(false);
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.img}>
      <View style={styles.container}>
        <Button
          title="Add a task"
          color={"purple"}
          onPress={startTaskHandler}
        />
        <TaskInput
          visible={visibleModal}
          cancelModal={cancelModal}
          inputHandler={inputHandler}
          buttonPressHandler={buttonPressHandler}
          image={image}
        />

        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Tasks
                text={item.text}
                id={item.id}
                onDeleteItem={deleteTaskHandler}
              />
            )}
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
  tasksContainer: {
    flex: 5,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});

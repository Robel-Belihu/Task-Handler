import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Tasks(props) {
  return (
    <Pressable
      style={styles.pressable}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.taskItem}>
        <Text style={styles.taskItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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

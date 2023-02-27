import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Tasks(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
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
    marginTop: 16,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "purple",
  },
  taskItemText: {
    padding: 20,
    marginLeft: 10,
    color: "#fff",
    fontSize: 17,
    backgroundColor: "purple",
  },
  pressed: {
    opacity: 0.5,
  },
});

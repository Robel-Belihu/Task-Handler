import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Tasks({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.taskItem}>
        <Text style={styles.taskItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
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

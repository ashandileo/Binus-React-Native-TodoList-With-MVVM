import React, { useState } from "react";
import { View, FlatList, TextInput, Button, Text } from "react-native";
import { useTaskController } from "../controllers/TaskController";

const TaskList = () => {
  const { tasks, addTask, toggleTask } = useTaskController();
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Tambah tugas baru"
      />
      <Button
        title="Tambah"
        onPress={() => {
          addTask(text);
          setText("");
        }}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            onPress={() => toggleTask(item.id)}
            style={{
              textDecorationLine: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

export default TaskList;

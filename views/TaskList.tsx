import React, { useState } from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button, Card, Text, Appbar } from "react-native-paper";
import { useTaskViewModel } from "../view-models/useTaskViewModel";

const TaskList = () => {
  const { tasks, addTask, toggleTask } = useTaskViewModel();
  const [text, setText] = useState("");

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="TodoList Application" />
      </Appbar.Header>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            style={{ flex: 1, padding: 12 }}
            renderItem={({ item }) => (
              <Card style={styles.card} onPress={() => toggleTask(item.id)}>
                <Card.Content>
                  <Text
                    style={[styles.text, item.completed && styles.completed]}
                  >
                    {item.title}
                  </Text>
                </Card.Content>
              </Card>
            )}
          />

          <View style={{ padding: 12 }}>
            <TextInput
              label="Add Task"
              value={text}
              onChangeText={setText}
              mode="outlined"
              style={styles.input}
            />
            <Button
              mode="contained"
              onPress={() => {
                addTask(text);
                setText("");
              }}
              style={styles.button}
            >
              Add
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
  },
  card: {
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default TaskList;

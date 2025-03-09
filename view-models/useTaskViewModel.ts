import { useState } from "react";
import { Task } from "@/models/TaskModel";

export const useTaskViewModel = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Belajar React Native", completed: false },
    { id: 2, title: "Implementasi MVVM", completed: false },
  ]);

  const addTask = (title: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length > 0 ? prevTasks[prevTasks.length - 1].id + 1 : 1,
        title,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, toggleTask };
};

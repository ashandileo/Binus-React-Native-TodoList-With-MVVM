import { useState } from "react";
import { Task } from "@/models/task/TaskModel";

export const useTaskController = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Belajar React Native", completed: false },
    { id: 2, title: "Implementasi MVC", completed: false },
  ]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, toggleTask };
};

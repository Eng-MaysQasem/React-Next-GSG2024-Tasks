import React, { useState } from 'react';
import Form from './Components/Form/Form.tsx';
import TaskStatistics from './Components/TaskStatistics/TaskStatistics.tsx';
import List from './Components/List/List.tsx';
import { IItem } from './assets/Type.tsx';
import './App.css';

function App() {
  const [Tasks, SetTasks] = useState<IItem[]>([]);

  const addTask = (task: IItem) => {
    SetTasks([...Tasks, task]);
  };

  const deleteTask = (id: number) => {
    const newTask = Tasks.filter((task) => task.Id !== id);
    SetTasks([...newTask]);
  };

  const completeTask = (id: number) => {
    const newTask = Tasks.map((task) =>
      task.Id === id ? { ...task, IsComplete: !task.IsComplete } : task
    );
    SetTasks([...newTask]);
  };

  return (
    <>
      <Form handleAdd={addTask} />
      <TaskStatistics tasks={Tasks} />
      <List tasks={Tasks} handleDelete={deleteTask} handleComplete={completeTask} />
    </>
  );
}

export default App;

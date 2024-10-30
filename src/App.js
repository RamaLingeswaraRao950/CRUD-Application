// src/App.js

import React from 'react';
import { useTaskManager } from './hooks/useTaskManager';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const { tasks, addTask, deleteTask, toggleTaskStatus } = useTaskManager();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Task Management Tool</h1>
        <TaskForm onSubmit={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggleStatus={toggleTaskStatus} />
      </div>
    </div>
  );
};

export default App;
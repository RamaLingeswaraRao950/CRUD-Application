// src/hooks/useTaskManager.js
import { useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';

const initialTasks = [];

export const useTaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', task });
  };

  const editTask = (taskId, updatedTask) => {
    dispatch({ type: 'EDIT_TASK', taskId, updatedTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', taskId });
  };

  const toggleTaskStatus = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK_STATUS', taskId });
  };

  return { tasks, addTask, editTask, deleteTask, toggleTaskStatus };
};
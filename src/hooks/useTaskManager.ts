// src/hooks/useTaskManager.ts
import { useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { Task } from '../types/Task';

const initialTasks: Task[] = [];

export const useTaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', task });
  };

  const editTask = (taskId: string, updatedTask: Partial<Task>) => {
    dispatch({ type: 'EDIT_TASK', taskId, updatedTask });
  };

  const deleteTask = (taskId: string) => {
    dispatch({ type: 'DELETE_TASK', taskId });
  };

  const toggleTaskStatus = (taskId: string) => {
    dispatch({ type: 'TOGGLE_TASK_STATUS', taskId });
  };

  return { tasks, addTask, editTask, deleteTask, toggleTaskStatus };
};
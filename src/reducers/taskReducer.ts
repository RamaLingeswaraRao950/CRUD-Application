// src/reducers/taskReducer.ts
import { Task } from '../types/Task';

type TaskAction =
  | { type: 'ADD_TASK'; task: Task }
  | { type: 'EDIT_TASK'; taskId: string; updatedTask: Partial<Task> }
  | { type: 'DELETE_TASK'; taskId: string }
  | { type: 'TOGGLE_TASK_STATUS'; taskId: string };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.taskId ? { ...task, ...action.updatedTask } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.taskId);
    case 'TOGGLE_TASK_STATUS':
      return state.map((task) =>
        task.id === action.taskId
          ? { ...task, status: task.status === 'Completed' ? 'In Progress' : 'Completed' }
          : task
      );
    default:
      return state;
  }
};
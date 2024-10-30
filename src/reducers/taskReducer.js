// src/reducers/taskReducer.js

export const taskReducer = (state, action) => {
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
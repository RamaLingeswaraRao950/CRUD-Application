import React, { useState } from 'react';
import { Task } from '../types/Task';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    priority: 'Low',
    status: 'In Progress',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ id: '', title: '', description: '', dueDate: new Date(), priority: 'Low', status: 'In Progress' }); // Reset form
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Enter task description"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={task.dueDate.toISOString().split('T')[0]}
            onChange={(e) => setTask({ ...task, dueDate: new Date(e.target.value) })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value as Task['priority'] })}
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

import React from 'react';
import { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onToggleStatus: (id: string) => void;
  }  

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleStatus }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Task List</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-5">
          {tasks.map((task) => (
            <li key={task.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-800">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                  <p className={`text-xs mt-2 font-medium ${task.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {task.status}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300"
                    onClick={() => onToggleStatus(task.id)}  // Toggle status
                  >
                    {task.status === 'Completed' ? 'Mark as In Progress' : 'Mark as Completed'}
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => onDelete(task.id)}  // Delete task
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks available. Please add a task.</p>
      )}
    </div>
  );
};

export default TaskList;

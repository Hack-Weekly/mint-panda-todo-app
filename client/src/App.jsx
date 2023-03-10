import Task from './components/Task';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      text: 'Learn React',
      createdAt: '',
      completedAt: '',
      isComplete: false,
      isArchived: false,
    },
    {
      id: 2,
      text: 'Learn Vite',
      createdAt: '',
      completedAt: '',
      isComplete: false,
      isArchived: false,
    },
  ]);
  return (
    <div className="task-container">
      {taskList.map((item) => {
        return (
          <Task
            key={item.id}
            task={item}
          />
        );
      })}
    </div>
  );
}

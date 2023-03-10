import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "do something",
      isComplete: true,
      createdDate: "",
      completedDate: "",
      isArchived: false,
  },
  {
      id: 2,
      text: "do the next thing",
      isComplete: false,
      createdDate: "",
      completedDate: null,
      isArchived: false,
  },
  {
      id: 3,
      text: "do this thing then archive it",
      isComplete: true,
      createdDate: "",
      completedDate: "",
      isArchived: true,
  },
  {
      id: 4,
      text: "do the last thing",
      isComplete: false,
      createdDate: "",
      completedDate: null,
      isArchived: false,
  },
  ])

  return (
    <>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App;

import { useState } from 'react';
import TaskList from './components/TaskList';
import TabPanel from './components/TabPanel';

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

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const filterTasks = (selection) => {
    if (selection === "open") {
      setFilteredTasks(tasks.filter((task) => !task.isComplete));
    }
    else if (selection === "completed") {
      setFilteredTasks(tasks.filter((task) => task.isComplete && !task.isArchived));
    }
    else if (selection === "archived") {
      setFilteredTasks(tasks.filter((task) => task.isArchived));
    }
    else setFilteredTasks(tasks);
  }

  return (
    <>
      <TabPanel handleClick={filterTasks}/>
      <TaskList tasks={filteredTasks}/>
    </>
  )
}

export default App;

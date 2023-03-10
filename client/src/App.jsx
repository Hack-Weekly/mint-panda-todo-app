import { useState } from 'react';
import TaskList from './components/TaskList';
import CategoryBar from './components/CategoryBar';

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
    console.log('ran filterTasks')
    if (selection == null) {
      setFilteredTasks(tasks);
      return;
    }

    let newTasks = tasks.filter(task => task.isComplete == selection);
    console.log(newTasks)
    setFilteredTasks(newTasks)
  }

  return (
    <>
      <CategoryBar handleClick={filterTasks}/>
      <TaskList tasks={filteredTasks}/>
    </>
  )
}

export default App;

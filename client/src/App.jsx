import { useState, useMemo } from 'react';
import TaskList from './components/TaskList';
import TabPanel from './components/TabPanel';
import { Container, styled } from '@mui/system';
import TaskInput from './components/TaskInput';
import shortid from 'shortid';

const StyledContainer = styled(Container)`
  align-items: center
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

function App() {

  const [value, setValue] = useState('all');
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('');

  const taskText = useMemo(() => ({
    all: `All (${tasks.length})`,
    open: `Open (${tasks.filter((task) => !task.isCompleted).length})`,
    completed: `Completed (${tasks.filter((task) => task.isCompleted && !task.isArchived).length})`,
    archived: `Archived (${tasks.filter((task) => task.isArchived).length})`
  }), [tasks]);

  const filteredTasks = useMemo(() => {
    if (value === "open") {
      return tasks.filter((task) => !task.isCompleted);
    }
    else if (value === "completed") {
      return tasks.filter((task) => task.isCompleted && !task.isArchived);
    }
    else if (value === "archived") {
      return tasks.filter((task) => task.isArchived);
    }
    return tasks;
  },[value, tasks])

  // taskinput button onClick callback
  const addTask = () => {
    if (inputValue != '') {
      const fullDate = new Date();

      setTasks([...tasks, {
        id: shortid.generate(),
        text: inputValue,
        isCompleted: false,
        createdDate: fullDate,
        completedDate: null,
        isArchived: false
      }])
    }
  }

  // task button onClick callbacks passed as props
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const completeTask = (id) => {
    let newTasks = tasks.map(task => {
      if (task.id === id){
        task.isCompleted = true;
        return task;
      }
      return task;
    });
    setTasks(newTasks)
  }
  const archiveTask = (id) => {
    let newTasks = tasks.map(task => {
      if (task.id === id){
        task.isArchived = true;
        return task;
      }
      return task;
    });
    setTasks(newTasks)
  }

  return (
    <StyledContainer>
      <TabPanel selectedTab={value} setSelectedTab={setValue} taskText={taskText}/>
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} addTask={addTask}/>
      <TaskList archiveTask={archiveTask} deleteTask={deleteTask} completeTask={completeTask} tasks={filteredTasks}/>
    </StyledContainer>
  )
}

export default App;

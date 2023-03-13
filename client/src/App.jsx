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

  const filteredTasks = useMemo(() => {
    if (value === "open") {
      return tasks.filter((task) => !task.isComplete);
    }
    else if (value === "completed") {
      return tasks.filter((task) => task.isComplete && !task.isArchived);
    }
    else if (value === "archived") {
      return tasks.filter((task) => task.isArchived);
    }
    return tasks;
  },[value, tasks])

  const addTask = () => {
    if (inputValue != '') {
      const fullDate = new Date();

      setTasks([...tasks, {
        id: shortid.generate(),
        text: inputValue,
        isComplete: false,
        createdDate: fullDate,
        completedDate: null,
        isArchived: false
      }])
    }
  }

  return (
    <StyledContainer>
      <TabPanel selectedTab={value} setSelectedTab={setValue}/>
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} addTask={addTask}/>
      <TaskList tasks={filteredTasks}/>
    </StyledContainer>
  )
}

export default App;

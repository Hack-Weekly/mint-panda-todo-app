import { useState, useMemo, useEffect } from 'react';
import TaskList from './components/TaskList';
import TabPanel from './components/TabPanel';
import Toast from './components/Toast';
import { Container, styled } from '@mui/system';
import TaskInput from './components/TaskInput';
import shortid from 'shortid';
import { Typography, Box } from '@mui/material';

import { query, collection, onSnapshot } from 'firebase/firestore'
import { db, dbAddTask, dbRemoveTask, dbCompleteTask, dbArchiveTask } from './firebase_init';


const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

function App() {

  const [value, setValue] = useState('all');
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [openToast, setOpenToast] = useState(false);

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

    if (inputValue !== '') {
      setMessage('Task Added');
      setOpenToast(true)

      const fullDate = new Date();
      
      const newTask = {
        id: shortid.generate(),
        text: inputValue,
        isCompleted: false,
        createdDate: fullDate.toUTCString(),
        completedDate: null,
        isArchived: false
      }

      setTasks([...tasks, newTask])
      dbAddTask(newTask)
    }

    setInputValue("")
  }

  // task button onClick callbacks passed as props
  const deleteTask = (id) => {
    setMessage('Task Deleted');
    setOpenToast(true);
    setTasks(tasks.filter(task => task.id !== id))
    dbRemoveTask(id);
  }
  const completeTask = (id) => {
    setMessage('Task Completed');
    setOpenToast(true);
    let newTasks = tasks.map(task => {
      if (task.id === id){
        task.isCompleted = true;
        return task;
      }
      return task;
    });
    setTasks(newTasks)
    dbCompleteTask(id);
  }
  const archiveTask = (id) => {
    setMessage('Task Archived');
    setOpenToast(true);
    let newTasks = tasks.map(task => {
      if (task.id === id){
        task.isArchived = true;
        return task;
      }
      return task;
    });
    setTasks(newTasks)
    dbArchiveTask(id);
  }

  // Firebase updating
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id:doc.id})
      })
      setTasks(todosArr);
    })
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id:doc.id})
      })
      setTasks(todosArr);
    })
    return () => unsubscribe();
  }, [])

  return (
    <StyledContainer>
      <Toast message={message} openToast={openToast} setOpenToast={setOpenToast} />
      <Box 
        sx={{
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '2rem'
        }} 
        alignItems="center" 
        justifyContent="center"
      >
        <Typography variant="h3" component="h1">
          Panda To-Do
        </Typography>
      </Box>
      <TabPanel selectedTab={value} setSelectedTab={setValue} taskText={taskText}/>
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} addTask={addTask}/>
      <TaskList archiveTask={archiveTask} deleteTask={deleteTask} completeTask={completeTask} tasks={filteredTasks}/>
    </StyledContainer>
  )
}

export default App;

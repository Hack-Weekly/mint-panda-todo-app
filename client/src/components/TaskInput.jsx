import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

function TaskInput({ addTask, inputValue, setInputValue }) {

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <Box sx={{margin: '1rem', 
      display: 'flex', 
      justifyContent: 'center',
      gap: '1rem'}} 
      alignItems="center" 
      justifyContent="center"
    >
      <TextField onChange={handleChange} color="primary" label="Describe Task" variant="outlined"/>
      <Button onClick={addTask} variant="contained">ADD</Button>
    </Box>

  )
}

export default TaskInput;
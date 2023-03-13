import TextField from '@mui/material/TextField';
import { Box, Button, styled } from '@mui/material';

const StyledForm = styled("form")`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

function TaskInput({ addTask, inputValue, setInputValue }) {
  const handleChange = (event) => {
    setInputValue(event.target.value || "");
  }
  const handleAddTask = (event) => {
    event.preventDefault();

    addTask(inputValue)
  }

  return (
    <Box
      sx={{
        margin: '2rem',
      }}
    >
      <StyledForm onSubmit={handleAddTask}>
        <TextField onChange={handleChange} color="primary" label="Describe Task" variant="outlined" value={inputValue} />
        <Button type="submit" variant="contained" sx={{ marginLeft: "24px"}}>ADD</Button>
      </StyledForm>
    </Box>
  )
}

export default TaskInput;
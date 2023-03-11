import { Grid, styled } from '@mui/material'
import React from 'react'
import Task from './Task'

const StyledGrid = styled(Grid)`
  align-items: center;
  display: inline-grid;
  grid-gap: 12px;
  grid-template-columns: repeat(1, 350px);
  justify-content: center;
  margin-top: 32px;

  ${props => props.theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 350px);
  }
  ${props => props.theme.breakpoints.up("lg")} {
    grid-template-columns: repeat(3, 400px);
  }
`;

function TaskList ({ tasks }) {
  return (
    <StyledGrid container>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </StyledGrid>
  )
}

export default TaskList

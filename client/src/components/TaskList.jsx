import { Grid } from '@mui/material'
import React from 'react'
import Task from './Task'

function TaskList ({ tasks }) {
  return (
    <Grid container spacing={3} xs={12} sx={{m: 3}}>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </Grid>
  )
}

export default TaskList

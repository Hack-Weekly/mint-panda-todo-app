import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'

// Documentation on Material UI Card: https://mui.com/material-ui/react-card/
function Task ({ task, deleteTask, completeTask, archiveTask }) {
  const { id, text, isCompleted, createdDate, completedDate, isArchived } = task

  const handleDelete = () => {
    deleteTask(id);
  }

  const handleComplete = () => {
    completeTask(id);
  }

  const handleArchive = () => {
    archiveTask(id);
  }

  return (
    <Card key={id} sx={{ m: 3, maxWidth: "400px" }}>
      <CardContent>
        {/* <Typography variant='h3'>
          {`Task Id: ${id}`}
        </Typography>
        <Typography>
          {`Date Completed: ${completedDate}`}
        </Typography>
        <Typography>
          {`Is Task Archived: ${isArchived}`}
        </Typography> */}
        <Typography variant="h6">
          {text}
        </Typography>
        <Typography variant="body2">
          {`Date Created: ${createdDate}`}
        </Typography>
      </CardContent>
      <CardActions>
        {!task.isCompleted && (
        <Button onClick={handleComplete} variant='contained' size='small'>
          Mark As Complete
        </Button>
        )}
        {task.isCompleted && !task.isArchived && (
        <Button onClick={handleArchive} color='secondary' variant='contained' size='small'>
          Archive
        </Button>
        )}
        <Button onClick={handleDelete} variant='contained' color="error" size='small'>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Task

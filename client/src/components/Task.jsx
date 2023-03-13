import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'

// Documentation on Material UI Card: https://mui.com/material-ui/react-card/
function Task ({ task }) {
  const { id, text, isComplete, createdDate, completedDate, isArchived } = task

  return (
    <Card key={id} sx={{ m: 3, maxWidth: "400px" }}>
      <CardContent>
        {/* <Typography variant='h3'>
          {`Task Id: ${id}`}
        </Typography>
        <Typography>
          {`Is Task Complete? ${isComplete}`}
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
        <Button variant='contained' size='small'>
          Do Something Cool!
        </Button>
      </CardActions>
    </Card>
  )
}

export default Task

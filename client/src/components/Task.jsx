import React from 'react'
import {
  Box,
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
    <Box>
      <Card key={id} sx={{ m: 3 }}>
        <CardContent>
          <Typography variant='h3'>
            {`Task Id: ${id}`}
          </Typography>
          <Typography>
            {text}
          </Typography>
          <Typography>
            {`Is Task Complete? ${isComplete}`}
          </Typography>
          <Typography>
            {`Date Completed: ${completedDate}`}
          </Typography>
          <Typography>
            {`Date Created: ${createdDate}`}
          </Typography>
          <Typography>
            {`Is Task Archived: ${isArchived}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' size='small'>
            Do Something Cool!
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Task

import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
  keyframes,
  Icon,
  IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

const fadeinout = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
const StyledCard = styled(Card)`
    animation-name: ${fadeinout};
    animation-duration: 1.5s;
`

// Documentation on Material UI Card: https://mui.com/material-ui/react-card/

function Task ({ task, deleteTask, completeTask }) {
  const {
    id,
    text,
    isCompleted,
    createdDate,
    completedDate,
    isArchived
  } = task

  const handleDelete = () => {
    deleteTask(id)
  }

  const handleComplete = () => {
    completeTask(id)
  }

  const handleArchive = () => {
    archiveTask(id);
  }

  return (
    <StyledCard key={id} sx={{ m: 3, maxWidth: '400px' }}>
      <CardContent>
        <Typography variant='h6'>
          {text}
        </Typography>
        <Typography variant='body2'>
          {`Date Created: ${createdDate}`}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px'
        }}
      >
      {!task.isCompleted && (
        <Button onClick={handleComplete} variant='contained' size='small'>
          <AssignmentTurnedInIcon sx={{ color: 'white' }} />
        </Button>
        )}
        {task.isCompleted && !task.isArchived && (
        <Button onClick={handleArchive} color='secondary' variant='contained' size='small'>
          Archive
        </Button>
        )}
        <Button onClick={handleDelete} variant='contained' color="error" size='small'>
          Delete
        <Button
          onClick={handleDelete}
          variant='contained'
          color='error'
          size='small'
        >
          <DeleteIcon sx={{ color: 'white' }} />
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default Task

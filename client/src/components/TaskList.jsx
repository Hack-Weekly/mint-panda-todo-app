import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  const taskItems = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
    />
  ));

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5rem',
    gap: '1rem',
  };

  return <ul style={style}>{taskItems}</ul>;
}

export default TaskList;

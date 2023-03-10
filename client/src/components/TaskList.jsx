import React from 'react'

function TaskList({tasks}) {
    const taskItems = tasks.map(task => 
        <div key={task.id}>{task.text}</div>
    )

    const style = {display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}

    return (
        <ul style={style}>
            {taskItems}
        </ul>
    )
}

export default TaskList;
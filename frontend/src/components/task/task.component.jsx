import React from 'react'
import TaskItem from '../taskitem/taskitem.component';
import { useStyles } from "./task.style";

function Task(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <p>Task 1</p>
                <h6>Project: Reduce Weight</h6>
            </div>

            <div className={classes.listTask}>
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
            </div>
        </div>
    )
}

export default Task
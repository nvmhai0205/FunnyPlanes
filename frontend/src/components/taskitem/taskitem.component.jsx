import React from "react";
import { useStyles } from "./taskitem.style";
import { Checkbox } from "@mui/material";

function TaskItem(props) {
    const { status, name } = props; 
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Checkbox checked={status} />
            <p>{name}</p>
        </div>
    );
}

export default TaskItem;

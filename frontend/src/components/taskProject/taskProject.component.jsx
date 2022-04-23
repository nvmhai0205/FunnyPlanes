import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "./taskProject.style";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TaskItem from "../taskitem/taskitem.component";
import { IoIosAddCircle } from 'react-icons/io';

function TaskProject(props) {
    const { data } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <p>{data.name}</p>
                <Button>
                    <HiOutlineMenuAlt4 />
                </Button>
            </div>
            <div className={classes.listTask}>
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={false} name="Change color of button and text" />
                <TaskItem status={false} name="Change color of button and text" />
                <TaskItem status={false} name="Change color of button and text" />
            </div>
            <div className={classes.addStep}>
                <form>
                    <input type="text" placeholder="Add Step" />
                    <Button>
                        <IoIosAddCircle color="#EE4266" />
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default TaskProject;

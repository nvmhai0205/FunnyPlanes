import React from "react";
import Task from "../../components/task/task.component";
import { useStyles } from "./home.style";

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Task />
        </div>
    );
}

export default Home;
import React, {useContext} from "react";
import TaskItem from "../taskitem/taskitem.component";
import { useStyles } from "./task.style";
import { DataContext } from "../../context/DataProvider";


function Task(props) {
    const classes = useStyles();
    const { data: projects, setData} = useContext(DataContext);
    const { data } = props;


    const handleOnTaskCompleted = step => {

        step.isCompleted = true;
        data.countComplete += 1;
        if (data.countComplete == data.steps.length)
        {
            const collection = projects.collections[0];
            
            for (let i = 0; i < collection.items.length; i++) {
                if(collection.items[i].collected == false) {
                    collection.items[i].collected = true;
                    break;
                }
            }
        }
        setData({...projects});
    }

    return (
        <div className={classes.container}>
            <div className={classes.head}>
                <p>Task: {data.tName}</p>
                <h6>Project: {projects.projects[0].pName}</h6>
            </div>

            <div className={classes.listTask}>
                {/* <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" />
                <TaskItem status={true} name="Change color of button and text" /> */}
                {data.steps.map((step, index) => {
                    return (
                        <TaskItem key={index} step={step} 
                        handleOnTaskCompleted = {handleOnTaskCompleted}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Task;

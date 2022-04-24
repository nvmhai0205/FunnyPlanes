import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "./taskProject.style";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import TaskItem from "../taskitem/taskitem.component";
import { IoIosAddCircle } from 'react-icons/io';
import { DataContext } from "../../context/DataProvider";

function TaskProject(props) {
    const { task } = props;
    const classes = useStyles();
    const {data: projects, setData} = React.useContext(DataContext);
    const handleOnTaskCompleted = step => {

        step.isCompleted = true;
        task.countComplete += 1;
        if (task.countComplete == task.steps.length)
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

    const [step, setStep] = React.useState(
        {
            sName: "",
            isCompleted: false,
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStep({...step, [name]: value});
    }

    const handleAddStep = () => {
        task.steps.push(step);
        setData({...projects});
        setStep({
            sName: "",
            isCompleted: false,
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <p>{task.tName}</p>
                <Button>
                    <HiOutlineMenuAlt4 />
                </Button>
            </div>
            <div className={classes.listTask}>
                {
                    task.steps.map((step, index) => {
                        return (
                            <TaskItem step={step} handleOnTaskCompleted = {handleOnTaskCompleted} />
                        )
                    })
                }
            </div>
            <div className={classes.addStep}>
                <form>
                    <input type="text" onChange={handleChange} value={step.sName} name="sName" placeholder="Add Step" />
                    <Button onClick={handleAddStep}>
                        <IoIosAddCircle color="#EE4266" />
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default TaskProject;

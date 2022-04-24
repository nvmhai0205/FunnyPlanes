import React, { useState, useContext } from "react";
import { useStyles } from "./project.style";
import { Button, Grid } from "@mui/material";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import TaskProject from "../../components/taskProject/taskProject.component";
import { DataContext } from "../../context/DataProvider";


function Project() {
    const classes = useStyles();

    const {data, setData} = useContext(DataContext);

    const [tab, setTab] = useState(0);
    // const [tabData, setTabData] = useState(data.projects[tab]);

    const [newTask, setNewTask] = React.useState({
        tName: "",
        countComplete: 0,
        steps: [],
    })

    const [newPro, setNewPro] = React.useState({
        pName: "",
        tasks: [],
    })

    const handleChange = (e) => {
        const { name, value} = e.target;
        setNewTask({...newTask, [name]: value});
    }

    const handleChangePro = (e) => {
        const { name, value} = e.target;
        setNewPro({...newPro, [name]: value});
    }

    const handleAddTask = () => {
        data.projects[tab].tasks.push(newTask);
        setData({...data});
        setNewTask({
            tName: "",
            countComplete: 0,
            steps: [],
        });
    }

    const handleAddPro = () => {
        data.projects.push(newPro);
        setData({...data});
        setNewPro({
            pName: "",
            tasks: [],
        });
    }

    return (
        <div className={classes.root}>
            <div className={classes.fade}></div>
            <div>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <div className={classes.tab}>
                            <h3>Project</h3>
                            <div className={classes.listproject}>
                                {data.projects.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={
                                                index === tab
                                                    ? classes.active
                                                    : classes.item
                                            }
                                        >
                                            <Button
                                                onClick={() => {
                                                    setTab(index);
                                                }}
                                            >
                                                <div className={classes.btn}>
                                                    <div
                                                        className={classes.dot}
                                                    ></div>
                                                    <div
                                                        className={classes.name}
                                                    >
                                                        {item.pName}
                                                    </div>
                                                </div>
                                            </Button>
                                            <Button>
                                                <HiOutlineMenuAlt4 />
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={classes.addProject}>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Add Project"
                                        name="pName"
                                        value= {newPro.pName}
                                        onChange={handleChangePro}
                                    ></input>
                                    <Button onClick={handleAddPro}>
                                        <IoIosAddCircle />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.tabContent}>
                            <h3>{data.projects[tab].pName}</h3>
                            <div className={classes.addtask}>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Add Task"
                                        name="tName"
                                        value={newTask.tName}
                                        onChange={handleChange}
                                    ></input>
                                    <Button onClick={handleAddTask}>
                                        <IoIosAddCircle />
                                    </Button>
                                </form>
                            </div>
                            <div className={classes.taskContainer}>
                                <Grid container spacing={2}>
                                    {data.projects[tab].tasks.map((task, index) => {
                                        return (
                                            <Grid key={index} item xs={4}>
                                                <TaskProject task={task} />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Project;

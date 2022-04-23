import React, { useState } from "react";
import { useStyles } from "./project.style";
import { Button, Grid } from "@mui/material";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import TaskProject from "../../components/taskProject/taskProject.component";

const data = [
    {
        id: 1,
        name: "Reduce Weight",
        tasks: [
            {
                id: 1,
                name: "Do exercise",
                status: true,
            },
            {
                id: 2,
                name: "Walking",
                status: false,
            },
            {
                id: 3,
                name: "Swimming",
                status: false,
            },
        ],
    },
    {
        id: 2,
        name: "Do PPL assignment",
        tasks: [
            {
                id: 1,
                name: "Do homework",
                status: true,
            },
            {
                id: 2,
                name: "Learn PPL",
                status: false,
            },
            {
                id: 3,
                name: "Codding",
                status: false,
            },
        ],
    },
];

function Project() {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const [tabData, setTabData] = useState(data[tab]);
    return (
        <div className={classes.root}>
            <div className={classes.fade}></div>
            <div>
                <Grid container spacing={10}>
                    <Grid item xs={3}>
                        <div className={classes.tab}>
                            <h3>Project</h3>
                            <div className={classes.listproject}>
                                {data.map((item, index) => {
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
                                                    setTabData(data[index]);
                                                }}
                                            >
                                                <div className={classes.btn}>
                                                    <div
                                                        className={classes.dot}
                                                    ></div>
                                                    <div
                                                        className={classes.name}
                                                    >
                                                        {item.name}
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
                                        placeholder="Add Task"
                                    ></input>
                                    <Button>
                                        <IoIosAddCircle />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.tabContent}>
                            <h3>{tabData.name}</h3>
                            <div className={classes.addtask}>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Add Task"
                                    ></input>
                                    <Button>
                                        <IoIosAddCircle />
                                    </Button>
                                </form>
                            </div>
                            <div className={classes.taskContainer}>
                                <Grid container spacing={2}>
                                    {tabData.tasks.map((step, index) => {
                                        return (
                                            <Grid key={index} item xs={4}>
                                                <TaskProject data={step} />
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

import React, { useContext, useEffect, useState } from "react";
import Task from "../../components/task/task.component";
import { useStyles } from "./home.style";
import start from "./../../assets/images/start.png";
import goal from "./../../assets/images/goal.png";
import goalno from "./../../assets/images/goalno.png";
import { Button } from "@mui/material";
import { DataContext } from "../../context/DataProvider";



function Home() {
    const classes = useStyles();
    const {data} = useContext(DataContext);
    const getNumTaskComplete = () => {
        const tasks = data.projects[0].tasks;
        
        const count = tasks.reduce((prev, tasks) => {

            if (tasks.countComplete == tasks.steps.length)
                return prev + 1
            else
                return prev
        }, 0);
        return count;
    }
    const [activeStep, setActiveStep] = React.useState(getNumTaskComplete());
    const [taskChoose, setTaskChoose] = useState(0);

    const showTask = (i) => {
        setTaskChoose(i);
    }
    useEffect(() => {
        setActiveStep(getNumTaskComplete());
    }, [data])

    return (
        <div className={classes.root}>
            <div className={classes.fade}></div>
            <div className={classes.head}>
                <div>
                    Project: {data.projects[0].pName}
                </div>
                <p>Status: {getNumTaskComplete()}/{data.projects[0].tasks.length} Task</p>
            </div>

            <div className={classes.container}>
                <div className={classes.roadmap}>
                    <div className={classes.start}>
                        <div className={classes.goal}>
                            <img src={start} />
                        </div>
                        <div className={classes.linecont}>
                            <div className={classes.line}></div>
                        </div>
                    </div>
                    {data.projects[0].tasks.map((item, index) => {
                        return (
                            <div key={index} className={(index < activeStep) ? classes.item : classes.itemNotActive}>
                                <div>
                                    <Button onClick={() => {
                                        showTask(index);
                                    }}>
                                        {index + 1}
                                    </Button>
                                </div>
                                <div
                                    className={
                                        (index % 2 != 0)
                                            ? classes.nameUp
                                            : classes.nameDown
                                    }
                                >
                                    {item.tName}
                                </div>
                                <div className={classes.linecont}>
                                    <div className={(index < activeStep) ? classes.line : classes.lineNotActive}></div>
                                </div>
                            </div>
                        );
                    })}

                    <div className={classes.item}>
                        <div className={classes.goal}>
                            {
                                (activeStep == data.projects[0].tasks.length) ? <img src={goal} /> : <img src={goalno} />
                            }
                        </div>
                    </div>
                </div>

                <Task data={data.projects[0].tasks[taskChoose]} />
            </div>
        </div>
    );
}

export default Home;

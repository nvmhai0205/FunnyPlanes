import React from "react";
import Task from "../../components/task/task.component";
import { useStyles } from "./home.style";
import start from "./../../assets/images/start.png";
import goal from "./../../assets/images/goal.png";
import goalno from "./../../assets/images/goalno.png";
import { Button } from "@mui/material";

const data = [
    {
        id: 1,
        name: "Design the CTA",
    },
    {
        id: 2,
        name: "Design the CTA",
    },
    {
        id: 3,
        name: "Design the CTA",
    },
    {
        id: 4,
        name: "Design the CTA",
    },
    {
        id: 5,
        name: "Design the CTA",
    },
    {
        id: 6,
        name: "Design the CTA",
    },
];

function Home() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(5);
    const handleSuccess = () => {
        setActiveStep(activeStep + 1);
    };

    return (
        <div className={classes.root}>
            <div className={classes.fade}></div>
            <div className={classes.head}>
                <div>
                    Project: Reduce Weight
                </div>
                <p>Status: 0/3 Task</p>
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
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={(index < activeStep) ? classes.item : classes.itemNotActive}>
                                <div>
                                    <Button>
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
                                    {item.name}
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
                                (activeStep == data.length) ? <img src={goal} /> : <img src={goalno} />
                            }
                        </div>
                    </div>
                </div>

                <Task />
            </div>
        </div>
    );
}

export default Home;

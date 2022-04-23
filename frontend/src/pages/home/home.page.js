import React from "react";
import Task from "../../components/task/task.component";
import { useStyles } from "./home.style";
import start from "./../../assets/images/start.png";
import { Button } from "@mui/material";


const data = [
    {
        id: 1,
        name: "Design the CTA",
    },
    {
        id: 2,
        name: "Design the Button",
    },
    {
        id: 3,
        name: "Design the Text",
    },
    {
        id: 4,
        name: "Design the Color",
    },
    {
        id: 5,
        name: "Design the View",
    },
]

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <div className={classes.head}>
                <p>Status: 0/3 Task</p>
                <br/>
                <h3>Roadmap:</h3>
            </div>
            
            <div className={classes.container}>
                <div className={classes.start}>
                    <img src={start}/>
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className={classes.item}>
                                <div className={classes.linecont}>
                                    <div className={classes.line}>

                                    </div>
                                </div>
                                <div>
                                    <Button variant="contained">
                                        {index + 1}
                                    </Button>
                                </div>
                                <div className={(index % 2 != 0) ? classes.nameUp : classes.nameDown}>

                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;
import React, { useContext, useEffect, useState } from "react";
import Task from "../../components/task/task.component";
import { useStyles } from "./home.style";
import start from "./../../assets/images/start.png";
import goal from "./../../assets/images/goal.png";
import goalno from "./../../assets/images/goalno.png";
import { Button, Box } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import Modal from "@mui/material/Modal";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
    const classes = useStyles();
    const { data } = useContext(DataContext);
    const [proTab, setProTab] = useState(0);

    const [openModalPr, setOpenModalPr] = React.useState(false);
    const handleOpenModalPr = () => setOpenModalPr(true);
    const handleCloseModalPr = () => setOpenModalPr(false);

    const getNumTaskComplete = () => {
        const tasks = data.projects[proTab].tasks;
        
        const count = tasks.reduce((prev, tasks) => {
            if (tasks.countComplete == tasks.steps.length) return prev + 1;
            else return prev;
        }, 0);
        
        return count;
    };
    const [activeStep, setActiveStep] = React.useState(getNumTaskComplete());
    const [taskChoose, setTaskChoose] = useState(0);

    const showTask = (i) => {
        setTaskChoose(i);
    };
    useEffect(() => {
        setActiveStep(getNumTaskComplete());
    }, [proTab, data]);

    return (
        <div className={classes.root}>
            <div className={classes.fade}></div>
            <div className={classes.head}>
                <h5>Project: {data.projects[proTab].pName}</h5>
                <p>
                    Status: {getNumTaskComplete()}/
                    {data.projects[proTab].tasks.length} Task
                </p>
                <div className={classes.choosePro}>
                    <Button onClick={handleOpenModalPr}>MORE PROJECT <IoIosArrowDown /></Button>
                    
                </div>

                <Modal
                    open={openModalPr}
                    onClose={handleCloseModalPr}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.morePro}>
                        <h3>All Projects</h3>
                        <div className={classes.allpro}>
                            {
                                data.projects.map((pro, index) => {
                                    return (
                                        <Button onClick={() => {
                                            setProTab(index);
                                            
                                            handleCloseModalPr();
                                        }}
                                        className={(proTab == index) ? classes.activePro : classes.noActivePro}
                                        >
                                            {pro.pName}
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    </Box>
                </Modal>
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
                    {data.projects[proTab].tasks.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index < activeStep
                                        ? classes.item
                                        : classes.itemNotActive
                                }
                            >
                                <div>
                                    <Button
                                        onClick={() => {
                                            showTask(index);
                                        }}
                                    >
                                        {index + 1}
                                    </Button>
                                </div>
                                <div
                                    className={
                                        index % 2 != 0
                                            ? classes.nameUp
                                            : classes.nameDown
                                    }
                                >
                                    {item.tName}
                                </div>
                                <div className={classes.linecont}>
                                    <div
                                        className={
                                            index < activeStep
                                                ? classes.line
                                                : classes.lineNotActive
                                        }
                                    ></div>
                                </div>
                            </div>
                        );
                    })}

                    <div className={classes.item}>
                        <div className={classes.goal}>
                            {activeStep ==
                            data.projects[proTab].tasks.length ? (
                                <img src={goal} />
                            ) : (
                                <img src={goalno} />
                            )}
                        </div>
                    </div>
                </div>

                <Task data={data.projects[proTab].tasks[taskChoose]} />
            </div>
        </div>
    );
}

export default Home;

import React, { useContext } from "react";
import TaskItem from "../taskitem/taskitem.component";
import { useStyles } from "./task.style";
import { DataContext } from "../../context/DataProvider";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Task(props) {
    const classes = useStyles();
    const { data: projects, setData } = useContext(DataContext);
    const { data } = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cardReceived, setCardReceived] = React.useState(
        ""
    );

    const navigate = useNavigate();

    const handleOnTaskCompleted = (step) => {
        step.isCompleted = true;
        data.countComplete += 1;
        if (data.countComplete == data.steps.length) {
            const collection = projects.collections[0];

            for (let i = 0; i < collection.items.length; i++) {
                if (collection.items[i].collected == false) {
                    collection.items[i].collected = true;
                    setCardReceived(collection.items[i].src);
                    break;
                }
            }
            handleOpen();
        }
        setData({ ...projects });
    };

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
                        <TaskItem
                            key={index}
                            step={step}
                            handleOnTaskCompleted={handleOnTaskCompleted}
                        />
                    );
                })}
            </div>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <div className={classes.headModal}>
                        Congratulation!
                    </div>
                    <div className={classes.titleModal}>
                        You have received a gift!
                    </div>
                    <div className={classes.cardModal}>
                        <img src={cardReceived} />
                    </div>
                    <div className={classes.boxBtn}>
                        <Button onClick={() => {navigate("/mycollections")}}>
                            Go to your collections
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Task;

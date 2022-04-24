import React, { useState } from "react";
import { useStyles } from "./taskitem.style";
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';
import {DataContext} from "../../context/DataProvider";

function TaskItem(props) {
    const { step, handleOnTaskCompleted} = props;
    const {data, setData} = React.useContext(DataContext);
    const [check, setCheck] = useState(step.isCompleted);
    const handleOnclick = () => {
        
        handleOnTaskCompleted(step);
        
    }
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Checkbox
                sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                        color: pink[600],
                    },
                }}
                checked={step.isCompleted}
                onClick={() => {handleOnclick()}}
            />
            <p>{step.sName}</p>
        </div>
    );
}

export default TaskItem;

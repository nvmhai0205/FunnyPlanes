import React, { useState } from "react";
import { useStyles } from "./taskitem.style";
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';

function TaskItem(props) {
    const { status, name } = props;
    const [check, setCheck] = useState(status);
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
                checked={check}
                onClick={() => {setCheck(!check)}}
            />
            <p>{name}</p>
        </div>
    );
}

export default TaskItem;

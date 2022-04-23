import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    root: {
        minHeight: 300,
        width: 300,
        border: '1px solid #ddd',
    },
    header: {
        height: 40,
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        "& p": {
            fontSize: 14,
            width: 240,
        },
        "& button": {
            height: 40,
            color: "#333",
            minWidth: 40,
        },
        borderBottom: '1px solid #ddd',
    },
    listTask: {
        maxHeight: 250,
        overflowY: "scroll",
        borderBottom: '1px solid #ddd',
    },
    addStep: {
        height: 50,
        "& input": {
            border: "none",
            outline: "none",
            height: 45,
            width: 230,
            padding: '0px 10px',
            marginRight: 10,
        },
        "& button": {
            minWidth: 50,
            height: 50,
            borderRadius: 25,
            color: "#EE4266",
        },
        "& svg": {
            height: 30,
            width: 30,
            color: '#EE4266',
        }
    },
})
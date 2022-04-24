import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    fade: {
        height: 80,
    },
    tab: {
        height: 630,
        borderRight: "1px solid #ddd",
        padding: "20px 20px 0px",
        "& h3": {
            marginBottom: 20,
            color: "#EE4266",
        }
    },
    item: {
        height: 60,
        width: 320,
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        backgroundColor: "#fff",
        borderRadius: 10,
        transition: "all 0.5s",
        "& button": {
            height: 40,
            color: "#333", 
            borderRadius: 10,
            backgroundColor: "transparent !important",
        },
        "&:hover": {
            backgroundColor: "#dddddddd",
        }
    },
    active: {
        height: 60,
        width: 320,
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        backgroundColor: "#dddddddd",
        borderRadius: 10,
        color: "white",
        "& button": {
            height: 40,
            color: "black", 
            borderRadius: 10,
            backgroundColor: "transparent !important",
        }
    },
    btn: {
        width: 280,
        textAlign: "left",
        display: "flex",
        alignItems: "center",
    },
    name: {
        fontSize: 12,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#EE4266',
        marginRight: 10,
    },
    tabContent: {
        height: 630,
        padding: "20px 0px 0px",
        "& h3": {
            color: "#EE4266",
        }
    },
    taskContainer: {
        width: "95%",
        minHeight: "500px",
        marginTop: 20,
    },
    addtask: {
        width: 300,
        border: '1px solid #EE4266',
        marginTop: 10,
        borderRadius: 26,
        height: 52,
        "& input": {
            border: "none",
            outline: "none",
            height: 50,
            width: 237,
            padding: '0px 15px',
            marginRight: 10,
            borderRadius: 25,
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
    addProject: {
        width: 280,

        border: '1px solid #EE4266',
        marginTop: 10,
        borderRadius: 26,
        height: 52,
        "& input": {
            border: "none",
            outline: "none",
            height: 50,
            width: 217,
            padding: '0px 15px',
            marginRight: 10,
            borderRadius: 25,
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
        },
        
    }
})
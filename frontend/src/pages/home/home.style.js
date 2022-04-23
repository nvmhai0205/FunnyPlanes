import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    root: {
        width: 1400,
        margin: "auto",
        padding: "30px 0px",
    },
    head: {

    },
    container: {
        height: 300,
        width: 1000,
        border: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
    },
    start: {
        height: 50,
        width: 50,
        "& img": {
            height: 50,
            width: 50,
        }
    },
    linecont: {
        height: 60,
        width: 50,
        display: "flex",
        alignItems: "center",
    },
    line: {
        height: 5,
        width: 50,
        backgroundColor: "#58CC02",
    },
    item: {
        "& button": {
            height: 60,
            width: 60,
            borderRadius: 30,
            padding: 0,
            minWidth: 60,
            border: "5px solid #58CC02",
        },
        width: 110,
        display: "flex",
        position: "relative",
    },
    nameDown: {
        // height: 100,
        // width: 150,
        backgroundColor: "red",
        position: "absolute",
        borderTopWidth: 50,
    },
})
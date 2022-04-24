import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    root: {
        width: 1400,
        margin: "auto",
        padding: "30px 0px",
    },
    fade: {
        height: 80,
    },
    head: {
        height: 60,
        display: 'flex',
        alignItems: "center",
        "& h5": {
            backgroundColor: "#EE4266",
            color: "white",
            padding: "10px 20px",
            borderRadius: 10,
            marginRight: 10,
        }
    },
    container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    start: {
        height: 50,
        width: 120,
        "& img": {
            height: 50,
            width: 50,
        },
        display: "flex",
        alignItems: "center",
    },
    linecont: {
        height: 50,
        width: 70,
        display: "flex",
        alignItems: "center",
    },
    line: {
        height: 5,
        width: 70,
        backgroundImage: "linear-gradient(136deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)",
    },
    lineNotActive: {
        height: 5,
        width: 70,
        backgroundColor: "rgb(204, 204, 204)",
    },
    item: {
        "& button": {
            height: 50,
            width: 50,
            borderRadius: 30,
            padding: 0,
            minWidth: 50,
            backgroundImage: "linear-gradient(136deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)",
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
        },
        width: 120,
        display: "flex",
        position: "relative",
    },
    itemNotActive: {
        "& button": {
            height: 50,
            width: 50,
            borderRadius: 30,
            padding: 0,
            minWidth: 50,
            backgroundColor: "rgb(204, 204, 204)",
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
        },
        width: 120,
        display: "flex",
        position: "relative",
    },
    nameDown: {
        position: "absolute",
        // border: '1px solid #ddd',
        width: 150,
        height: 100,
        top: 60,
        right: 20,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    nameUp: {
        position: "absolute",
        // border: '1px solid #ddd',
        width: 150,
        height: 100,
        bottom: 60,
        right: 20,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    roadmap: {
        width: 1000,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        height: 500,
        padding: 30,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
    },
    goal: {
        height: 60,
        width: 60,
        display: "flex",
        alignItems: "center",
        "& img": {
            height: 50,
            width: 50,
        } 
    },
    choosePro: {
        backgroundColor: "transparent",
        "& button": {
            backgroundColor: "#FFC800",
            color: "white",
            "& svg": {
                height: 25,
                width: 25,
            }
        },
        margin: 10,
    },
    morePro: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        minHeight: 400,
        backgroundColor: 'white',
        boxShadow: 24,
        borderRadius: 10,
        "& h3": {
            color: "#EE4266",
            textAlign: "center",
            marginTop: 30,
        }
    },
    allpro: {
        height: 300,
        width: 400,
        border: '1px solid #ddd',
        marginTop: 10,
        overflowY: "scroll",
        padding: "30px 45px",
    },
    activePro: {
        backgroundColor: '#EE4266 !important',
        width: "300px",
        textAlign: 'left',
        color: "white !important",
    },
    noActivePro: {
        backgroundColor: '#dddddddd !important',
        width: "300px",
        textAlign: 'left',
        color: "white !important",
        "&:hover": {
            backgroundColor: '#EE4266aa !important',
        }
    }
})
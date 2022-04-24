import { makeStyles } from "@mui/styles";
import themes from "../../themes/theme";
import headtaskbg from "./../../assets/images/headtaskbg.png";
export const useStyles = makeStyles({
    container: {
        height: 500,
        width: 400,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        marginLeft: 10,
        borderRadius: 10,
    },
    head: {
        height: 180,
        background: `url(${headtaskbg}) no-repeat center center`,
        "& p": {
            padding: "20px 20px 10px",
            fontSize: "20px",
        },
        "& h6": {
            padding: "0px 20px 10px",
            fontSize: "20px",
        }
    },
    listTask: {
        marginTop: 20,
        height: 270,
        width: 350,
        margin: "auto",
        backgroundColor: '#EE426630',
        padding: 10,
        overflowY: "scroll",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        height: 400,
        boxShadow: 24,
        borderRadius: 10,
    },
    headModal: {
        color: "#EE4266",
        fontSize: 30,
        fontWeight: "bold",
        height: 80,
        width: "100%",
        display: 'flex',
        alignItems:"flex-end",
        justifyContent: "center",
        marginBottom: 10,
    },
    titleModal: {
        color: "#EE4266",
        fontSize: 16,
        width: "100%",
        display: 'flex',
        alignItems:"center",
        justifyContent: "center",
    },
    cardModal: {
        height: 200,
        width: "100%",
        display: 'flex',
        alignItems:"center",
        justifyContent: "center",
        marginTop: 10,
    },
    boxBtn: {
        width: "100%",
        display: 'flex',
        alignItems:"center",
        justifyContent: "center",
        marginTop: 20,
        "& button": {
            height: 40,
            backgroundColor: '#EE4266',
            color: "white",
            "&:hover": {
                backgroundColor: '#EE4266',
            }
        }
    }
})
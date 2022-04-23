import { makeStyles } from "@mui/styles";
import themes from "../../themes/theme";
import headtaskbg from "./../../assets/images/headtaskbg.png";
export const useStyles = makeStyles({
    container: {
        height: 500,
        width: 400,
        border: "1px solid #ddd",
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
        backgroundColor: '#EBFBFC',
        borderRadius: 10,
        padding: 10,
        overflowY: "scroll",
    }
})
import { makeStyles } from "@mui/styles";
import themes from "../../themes/theme";

export const useStyles = makeStyles({
    root: {
        height: 80,
        borderBottom: "1px solid #aaa",
        position: "fixed",
        backgroundColor: 'white',
        width: "100%",
        zIndex: 1000,
    },
    navbar: {
        height: 80,
        display: "flex",
        alignItems: "center",
        padding: "0px 50px",
    },
    navitem: {
        height: 30,
        display: "flex",
        alignItems: "center",
        '& svg': {
            color: themes.color.primary,
            height: "30px",
            width: "30px",
        },
        fontSize: "18px",
        color: "#333",
        transition: "all 0.4s",
        "&:hover": {
            color: themes.color.primary,
        },
    },
    login: {
        height: 80,
        display: "flex",
        alignItems: "center",
        width: 300,
        "& button": {
            width: 100,
        },
        marginLeft: 100,
    },
    under: {
        backgroundColor: themes.color.primary,
        height: 3,
        width: 100,
    },
    user: {
        width: 300,
        height: 80,
        display: "flex",
        alignItems: "center",
        "& button": {
            height: 50,
            width: 50,
            borderRadius: 25,
            padding: 0,
            minWidth: 50,
        },
        "& svg": {
            color: themes.color.secondary,
            height: "30px",
            width: "30px",
        }
    },
    us: {
        "& svg": {
            color: themes.color.danger,
            height: "30px",
            width: "30px",
        }
    }
});
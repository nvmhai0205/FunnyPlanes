import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    collectionsBox: {
        padding: '0 100px',
        width: "100%",
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    header: {
        borderBottom: '1px solid #000',
        padding: '10px',
        "& h3": {
            fontSize: '28px',
            fontWeight: '500'
        }
    },
    bottom: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 20px',
        "& button": {
            backgroundColor: "#EE4266",
            color: "white !important",
        }
    },
    
});


export default useStyles;
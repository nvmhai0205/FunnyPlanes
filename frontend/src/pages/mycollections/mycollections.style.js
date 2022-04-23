import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    collectionsBox: {
        padding: '0 100px'
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '10px 20px'
    }
});


export default useStyles;
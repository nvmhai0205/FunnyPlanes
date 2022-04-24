import React from 'react'
import { makeStyles } from '@mui/styles'
import FireImg from "../../../src/assets/images/fire.png"
import { Grid, Button } from "@mui/material";
import { CardMedia } from '@mui/material';

const useStyles = makeStyles({
    root: {
        padding: '30px 20px'
    },
    header: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
    },
    
    iconImg: {
        width: '100px',
        height: '100px',
    },
    itemImg: {
        width: '100px',
        height: '150px',
        zIndex: 10,
    },
    inActive: {
        opacity: 0.1,
    },
    wrapper: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}) 


const CollectionBox = ({collection}) => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                
                <img src={collection.img} alt="Icon img" className={classes.iconImg}/>
                
            </div>

            <Grid container spacing={1} padding={2}>
                {
                    collection.items.map((item, index) => 
                    <Grid className={classes.wrapper} item xs={6} sm={4} md={2}>
                        <img src={item.src} className={classes.itemImg + " " + (item.collected ? classes.inActive: '')}/>
                    </Grid>
                    )
                }
            </Grid>

        </div>
    )
}

export default CollectionBox
import React from 'react'
import { Button, Grid} from "@mui/material";
import useStyles from './mycollections.style';
import CollectionBox from '../../components/collections/CollectionBox';
import item from "../../assets/images/item.png"
import FireImg from "../../../src/assets/images/fire.png"
import WaterImg from "../../../src/assets/images/waterImg.png"
import WaterItem from "../../assets/images/water.png"

const collections = [{img: FireImg
    ,items: [
    {
        src: item,
        collected: false
    },
    {
        src: item,
        collected: true
    },
    {
        src: item,
        collected: false
    },
    {
        src: item,
        collected: true
    },{
        src: item,
        collected: false
    },
    {
        src: item,
        collected: true
    }


]},
{img: WaterImg
    ,items: [
    {
        src: WaterItem,
        collected: true
    },
    {
        src: WaterItem,
        collected: false
    },
    {
        src: WaterItem,
        collected: false
    },
    {
        src: WaterItem,
        collected: false
    },{
        src: WaterItem,
        collected: true
    },
    {
        src: WaterItem,
        collected: true
    }


]},


]

const MyCollections = ({}) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <h3>MY COLLECTIONS</h3>
                </div>
            </div>
            <div className={classes.collectionsBox}>
            {
                collections.map((collection, index) => <CollectionBox collection={collection}/>)
            }
            
            </div>

            <Button variant="contained">Contained</Button>
        </>
    )
}

export default MyCollections
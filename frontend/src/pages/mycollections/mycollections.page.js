import React, { useState } from 'react'
import { Button, Grid} from "@mui/material";
import useStyles from './mycollections.style';
import CollectionBox from '../../components/collections/CollectionBox';
import item from "../../assets/images/item.png"
import FireImg from "../../../src/assets/images/fire.png"
import WaterImg from "../../../src/assets/images/waterImg.png"
import WaterItem from "../../assets/images/water.png"

// const collections = [{img: FireImg
//     ,items: [
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },{
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     }


// ]},
// {img: WaterImg
//     ,items: [
//     {
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },{
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: true
//     }


// ]},
// {img: FireImg
//     ,items: [
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },{
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     }


// ]},
// {img: WaterImg
//     ,items: [
//     {
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },{
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: true
//     }


// ]},

// {img: FireImg
//     ,items: [
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },
//     {
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     },{
//         src: item,
//         collected: false
//     },
//     {
//         src: item,
//         collected: true
//     }


// ]},
// {img: WaterImg
//     ,items: [
//     {
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: true
//     },{
//         src: WaterItem,
//         collected: false
//     },
//     {
//         src: WaterItem,
//         collected: true
//     },
//     {
//         src: WaterItem,
//         collected: true
//     }


// ]},

// ]

const STEP = 2;

const MyCollections = ({collections}) => {

    const classes = useStyles();
   
    const [maxIndex, setMaxIndex] = useState(STEP - 1);
    
    return (
        <>
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <h3>MY COLLECTIONS</h3>
                </div>
            </div>
            <div className={classes.collectionsBox}>
            {
                collections.map((collection, index) => index <= maxIndex ? <CollectionBox collection={collection} key={index}/> : null)
            }
            
            </div>
            <div className={classes.bottom}>
                {
                    maxIndex < collections.length - 1 ? <Button className={classes.btn}
                    onClick={() => setMaxIndex(maxIndex + STEP < collections.length ? maxIndex + STEP : collections.length)}
                    >View more >> </Button> : null
                }
                
            </div>
            
        </>
    )
}

export default MyCollections
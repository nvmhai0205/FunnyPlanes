import React, { useState } from "react";
import { useStyles } from "./header.style";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { RiHomeHeartFill } from "react-icons/ri";
import { AiOutlineProject, AiOutlineSetting, AiFillFire } from "react-icons/ai";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { FaMedal, FaUserAlt } from "react-icons/fa";

function Header() {
    const classes = useStyles();

    const [login, setLogin] = useState(true);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <div className={classes.navbar}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Link to="/">
                                    <div className={classes.navitem}>
                                        <RiHomeHeartFill />
                                        Home
                                    </div>
                                    {/* <div className={classes.under}>
                                    </div> */}
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/project">
                                    <div className={classes.navitem}>
                                        <AiOutlineProject />
                                        Project
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/mycollections">
                                    <div className={classes.navitem}>
                                        <MdOutlineCollectionsBookmark />
                                        Collection
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/">
                                    <div className={classes.navitem}>
                                        <AiOutlineSetting />
                                        Setting
                                    </div>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                {login ? <Grid item xs={3}>
                    <div className={classes.user}>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <Button>
                                    <FaMedal />
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button>
                                    <AiFillFire />
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className={classes.us}>
                                    <FaUserAlt />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid> : 
                <Grid item xs={3}>
                    <div className={classes.login}>
                        <Grid container spacing={0}>
                            <Grid item xs={5}>
                                <Button variant="outlined">Register</Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button variant="contained">Sign In</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>}
            </Grid>
        </div>
    );
}

export default Header;

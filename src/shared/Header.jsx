import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    root: {
        color: theme.palette.secondary.light
    }
}));

export const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" className={classes.title}>Loft Taxi</Typography>
                <Link to="/map" className={classes.root}>Карта</Link>
                <Link to="/profile" >Профиль</Link>
                <Link to="/" >Войти</Link>
            </Toolbar>
        </AppBar>
    );
}
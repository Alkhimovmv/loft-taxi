import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    const { navigateTo } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" className={classes.title}>Loft Taxi</Typography>
                <Button classes={{ root: classes.root }} onClick={() => navigateTo("map")} color="inherit">
                    Карта
                </Button>
                <Button onClick={() => navigateTo("profile")} color="inherit">
                    Профиль
                </Button>
                <Button onClick={() => navigateTo("login")} color="inherit">
                    Войти
                </Button>
            </Toolbar>
        </AppBar>
    );
}
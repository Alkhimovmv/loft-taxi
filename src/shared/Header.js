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
    const { setPage } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>Loft Taxi</Typography>
                <Button classes={{ root: classes.root }} onClick={() => setPage("map")} color="inherit">
                    Карта
                </Button>
                <Button onClick={() => setPage("profile")} color="inherit">
                    Профиль
                </Button>
                <Button onClick={() => setPage("login")} color="inherit">
                    Войти
                </Button>
            </Toolbar>
        </AppBar>
    );
}
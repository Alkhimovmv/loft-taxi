import React from "react";

import { ProfileWithAuth } from "./Profile";
import { LoginWithAuth } from "./Login";
import { Map } from "./Map";
import { Signup } from "./Signup";
import { PrivateRoute } from './PrivateRoute'
import PropTypes from 'prop-types';
import "./App.css";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'loft-taxi-mui-theme';
import { connect } from "react-redux";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import { Logo } from 'loft-taxi-mui-theme';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  
  
})

class App extends React.Component {
  
  render() {
    const { appBar } = this.props.classes;
    return (
      <BrowserRouter>
        <AppBar className="appBar" position="static">
          <Logo/>
          <Toolbar>
            <Link to="/map">
              <Button>Карта</Button>
            </Link>
            <Link to="/profile">
              <Button>Профиль</Button>
            </Link>
            <Link to="/">
              <Button>Войти</Button>
            </Link>
          </Toolbar>
        </AppBar>
          
        
        <MuiThemeProvider theme={theme}>
          <main className="background__image">
            <section > 
              <Switch>
                <Route exact path="/" component={LoginWithAuth} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={ProfileWithAuth} />
              </Switch>
            </section>
          </main>
        </MuiThemeProvider>
      </BrowserRouter>
      
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(withStyles(styles)(App));

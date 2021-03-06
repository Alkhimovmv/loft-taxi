import React from "react";

import { Header } from './shared/Header';
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
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <MuiThemeProvider theme={theme}>
          <main>
            <section>
              <Switch>
                <Route exact path="/" component={LoginWithAuth} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={ProfileWithAuth} />
              </Switch>
            </section>
          </main>
        </MuiThemeProvider>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

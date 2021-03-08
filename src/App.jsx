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
import { Link, Switch, Route, MemoryRouter } from "react-router-dom";
import { Logo } from 'loft-taxi-mui-theme';

class App extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <header className="header">
          <Logo/>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/map" className="menu__link">Карта</Link>
              </li>
              <li className="menu__item">
                <Link to="/profile" className="menu__link">Профиль</Link>
              </li>
              <li className="menu__item menu__item--active">
                <Link to="/" className="menu__link">Войти</Link>
              </li>
            </ul>
          </nav>
        </header>
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
      </MemoryRouter>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

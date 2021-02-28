import React from "react";

import {Header} from './shared/Header';
import { ProfileWithAuth } from "./Profile";
import { LoginWithAuth } from "./Login";
import { Map } from "./Map";
import { withAuth } from "./AuthContext";
import PropTypes from 'prop-types';
import "./App.css";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from 'loft-taxi-mui-theme';
import { Signup } from "./Signup";



const PAGES = {
  login: (props) => <LoginWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  signup: (props) => <Signup {...props} />,
};

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };

  render() {
    return (
      <>
        <Header navigateTo={this.navigateTo}/>
        <MuiThemeProvider theme={theme}>
          <main>
            <section>
              {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
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

export default withAuth(App);

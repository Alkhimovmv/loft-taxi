import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';

import {Header} from './shared/Header';
import {Login} from './Login';
import {Signup} from './Signup';
import {Profile} from './Profile';
import {Map} from './Map';
import './App.css';
import {theme} from 'loft-taxi-mui-theme';


export class App extends React.Component {

  state = { page: "login" }

  setPage = (name) => {
    this.setState({ 
      page: name 
    });
  };

  currentPage = () => {
    switch (this.state.page) {
      case "map":
        return <Map/>;
      case "signup":
        return <Signup setPage={this.setPage} />;
      case "profile":
        return <Profile />;
      default:
        return <Login setPage={this.setPage} />;
    }
  };

  render() {
    let page = this.currentPage();

    return <>
      <MuiThemeProvider theme={theme}>
        <div>
          <Header setPage={this.setPage} />
          {page}
        </div>
        </MuiThemeProvider>
    </>;
  }
}

export default App;

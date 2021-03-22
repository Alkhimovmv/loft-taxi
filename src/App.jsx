import React from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CurrentPage from "./components/shared/CurrentPage";
import Header from "./components/shared/Header";
import axios from "axios";

axios.defaults.baseURL = "https://loft-taxi.glitch.me";

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<Header />
					<CurrentPage />
				</BrowserRouter>
			</MuiThemeProvider>
    );
  }
}
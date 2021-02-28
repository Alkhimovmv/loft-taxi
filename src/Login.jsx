import React, { Component } from "react";
import {PropTypes} from 'prop-types'
import { withAuth } from "./AuthContext";

export class Login extends Component {
  goToProfile = (e) => {
    e.preventDefault();
    this.props.navigate("profile");
  };

  authenticate = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вы вошли в систему {" "}
            <button onClick={this.goToProfile}>
              Войти в профиль
            </button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <div>Войти</div>
            <div>Новый пользователь?</div>
            <button>Зарегистрируйтесь</button>
            <label htmlFor="email" for="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password" for="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <button type="submit">Войти</button>
          </form>
        )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);

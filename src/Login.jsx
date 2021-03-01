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
          <div>
            <form>
              <div>Войти</div>
              <div>Новый пользователь?</div>
              <button type="button" onClick={() => this.props.navigate("signup")} >Зарегистрируйтесь</button>
            </form>
            <form onSubmit={this.authenticate}>
              <label className="label_hidden" htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" size="28" />
              <label className="label_hidden" htmlFor="password">Password:</label>
              <input id="password" type="password" name="password" size="28" />
              <button type="submit">Войти</button>
            </form>
          </div>
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

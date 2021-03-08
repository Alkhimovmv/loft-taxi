import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from './actions';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export class Login extends Component {
  authenticate = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.props.authenticate(email.value, password.value);
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            Вы вошли в систему
            <Link to="/profile">Войти в профиль</Link>
          </p>
        ) : (
          <div>
            <form onSubmit={this.authenticate}>
              <div>Войти</div>
              <label className="label_hidden" htmlFor="email">Email</label>
              <input id="email" type="email" name="email" size="28" />
              <label className="label_hidden" htmlFor="password">Пароль</label>
              <input id="password" type="password" name="password" size="28" />
              <div>Забыли пароль?</div>
              <Button type="submit" variant="contained" color="primary">Войти</Button>
              <div>Новый пользователь?</div>
              <Link to="/signup">Регистрация</Link>
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

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);

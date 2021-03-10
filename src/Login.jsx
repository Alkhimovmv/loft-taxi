import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from './actions';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Logo } from 'loft-taxi-mui-theme';


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
          <Typography variant="h4" color="inherit">
            Вы вошли в систему
            <Link to="/profile">
              <Button variant="contained" color="primary">Войти в профиль</Button>
            </Link>
          </Typography>
        ) : (
          <div className="login">
            <Logo/>
            <form className="login__form" onSubmit={this.authenticate}>
              <Typography variant="h4">Войти</Typography>
              <Typography variant="body1">
                Новый пользователь?
                <Link to="/signup">Зарегистрируйтесь</Link>
              </Typography>
              <label htmlFor="email">Имя пользователя *</label>
              <input id="email" type="email" name="email" size="28" />
              <label htmlFor="password">Пароль *</label>
              <input id="password" type="password" name="password" size="28" />
              <Button type="submit" variant="contained" color="primary">Войти</Button>
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

import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from './actions';
import { Link } from "react-router-dom";

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
            <form>
              <div>Войти</div>
              <div>Новый пользователь?</div>
              <Link to="/signup" >Зарегистрируйтесь</Link>
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

export const LoginWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);

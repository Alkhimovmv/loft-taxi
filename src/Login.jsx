import React from 'react'

export const Login = (props) => {
    const { setPage } = props;
    const map = (e) => {
        e.preventDefault();

        setPage('map');
    }
    const signup = (e) => {
        e.preventDefault();

        setPage('signup');
    }
    return (
        <form>
            <div>Войти</div>
            <div>Новый пользователь?</div>
            <button onClick={signup}>Зарегистрируйтесь</button>

            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" size="28" placeholder="Имя пользователя"/>
            <label htmlFor="password"></label>
            <input id="password" type="password" name="password" size="28" placeholder="Пароль"/>
            <button onClick={map}>Войти</button>
        </form>
    )
}
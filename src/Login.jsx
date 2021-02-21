import React from 'react'

export const Login = () => {
    return (
        <form>
            <div>Войти</div>
            <div>Новый пользователь?</div>
            <button onClick={() => {this.currentPage("signup")}}>Зарегестрируйтесь</button>

            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" size="28" placeholder="Имя пользователя"/>
            <label htmlFor="password"></label>
            <input id="password" type="password" name="password" size="28" placeholder="Пароль"/>
            <button onClick={() => {this.currentPage("map")}}>Войти</button>
        </form>
    )
}
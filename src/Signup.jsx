import React from 'react'

export const Signup = () => {
    return (
        <form>
            <div>Регистрация</div>
            <div>Уже зарегистрированы?</div>
            <button onClick={() => {this.currentPage("login")}}>Войти</button>

            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" size="28" placeholder="Адрес электронной почты*"/>
            <label htmlFor="name"></label>
            <input id="name" type="name" name="name" size="28" placeholder="Имя*"/>
            <label htmlFor="surname"></label>
            <input id="surname" type="surname" name="surname" size="28" placeholder="Фамилия*"/>
            <label htmlFor="password"></label>
            <input id="password" type="password" name="password" size="28" placeholder="Пароль*"/>
            <button onClick={() => {this.currentPage("map")}}>Войти</button>
        </form>
    )
}
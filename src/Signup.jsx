import React, { Component } from 'react';

export class Signup extends Component {

    render() {
        return (
            <>
                <form>
                    <div>Регистрация</div>
                    <div>Уже зарегистрированы?</div>
                    <button onClick={() => this.navigateTo("login")}>Войти</button>
        
                    <label className="label_hidden" htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" size="28" placeholder="Адрес электронной почты*"/>
                    <label className="label_hidden" htmlFor="name">Name:</label>
                    <input id="name" type="name" name="name" size="28" placeholder="Имя*"/>
                    <label className="label_hidden" htmlFor="surname">Surname:</label>
                    <input id="surname" type="surname" name="surname" size="28" placeholder="Фамилия*"/>
                    <label className="label_hidden" htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" size="28" placeholder="Пароль*"/>
                    <button>Зарегистрироваться</button>
                </form>
            </>
        )
    }
    
}

export default Signup;

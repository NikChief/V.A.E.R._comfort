import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Login.module.css'

function Login(props) {
  const dispatch = useDispatch();

  // user_name, user_email, user_password, user_repeatPassword,
  const loginFunction = (event) => {
    event.preventDefault();
    const body = {
      user_email: event.target.email.value,
      user_password: event.target.password.value,
    }
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      //?
      .then(data => dispatch(data))
  }
  return (
    <div className={style.login_form_container}>
      <form action="/login" method="post" onSubmit={loginFunction}>
        <div className={style.namefield}><label for="email">Введите e-mail</label></div>
        <div className={style.input}><input type="email" placeholder="Введите ваш e-mail" name="email" id="email" /></div>
        <div className={style.namefield}><label for="password">Введите пароль</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль" name="password" id="password" /></div>
        <div><input type="submit" value="Войти" /></div>
      </form>
    </div>
  );
}

export default Login;

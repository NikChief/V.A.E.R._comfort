import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loggedInUserAC } from '../../redux/actionCreators/userAC';
import style from './Login.module.css'

function Login(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userState);

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
      .then(res => {
        if (res.status === 200) {
          navigate('/')
        } 
        return res.json()
      })
      .then(data => {
        dispatch(loggedInUserAC(data))
      })

  }
  return (
    <div className={style.login_form_container}>
      <form action="/login" method="post" onSubmit={loginFunction}>
        <div className={style.namefield}><label htmlFor="email">Введите e-mail</label></div>
        <div className={style.input}><input type="email" placeholder="Введите ваш e-mail" name="email" id="email" /></div>
        <div className={style.namefield}><label htmlFor="password">Введите пароль</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль" name="password" id="password" /></div>
        <div>
          {!user.loggedIn && user.message}
        </div>
        <div><input type="submit" value="Войти" /></div>
      </form>
    </div>
  );
}

export default Login;

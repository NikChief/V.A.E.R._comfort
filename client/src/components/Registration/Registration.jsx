import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUserAC } from '../../redux/actionCreators/userAC';
import style from './Registration.module.css'

function Registration(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  // user_name, user_email, user_password, user_repeatPassword,
  const registrationFunction = (event) => {
    event.preventDefault();
    const body = {
      user_name: event.target.name.value,
      user_email: event.target.email.value,
      user_password: event.target.password.value,
      user_repeatPassword: event.target.repeat_password.value,
    }
    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        console.log(res.status)
        if (res.status===200)
        return res.json()
      })
      .then(data => { 
        dispatch(loggedInUserAC(data))
    })
  }
  return (
    <div className={style.registration_form_container}>
      <form action="/login" method="post" onSubmit={registrationFunction}>
        <div className={style.namefield}><label for="name">Имя</label></div>
        <div className={style.input}><input type="text" placeholder="Введите имя" name="name" id="name" required /></div>
        <div className={style.namefield}><label for="email">E-mail</label></div>
        <div className={style.input}><input type="email" placeholder="Введите ваш e-mail" name="email" id="email" /></div>
        <div className={style.namefield}><label for="password">Пароль</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль" name="password" id="password" /></div>
        <div className={style.namefield}><label for="repeat_password">Введите пароль повторно. Они должны совпадать</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль еще раз" name="repeat_password" id="repeat_password" /></div>
        <div><input type="submit" value="Зарегистрироваться" /></div>
      </form>
    </div>
  );
}

export default Registration;

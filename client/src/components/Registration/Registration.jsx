import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loggedInUserAC } from '../../redux/actionCreators/userAC';
import style from './Registration.module.css'

function Registration(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userState);
  // user_name, user_email, user_password, user_repeatPassword,
  const [regState, setRegState] = useState(false)
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
        // console.log('26', res.status)
        if (res.status === 200) {
          navigate('/')
        } else {
          setRegState(true)
          
        }
        return res.json()
      })
      .then(data => {
        dispatch(loggedInUserAC(data))
        console.log(user)
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
        <div>
          {regState && user.message}
        </div>
        <div><input type="submit" value="Зарегистрироваться" /></div>
      </form>
    </div>
  );
}

export default Registration;

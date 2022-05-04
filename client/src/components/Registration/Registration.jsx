import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearUserMessageAC, fetchRegisterUserAC } from '../../redux/actionCreators/userAC';
import style from './Registration.module.css'

function Registration(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(clearUserMessageAC())
  },[dispatch])

  const registrationFunction = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      repeatPassword: event.target.repeat_password.value,
    }
    
    dispatch(fetchRegisterUserAC(body))
  }

  useEffect(() => {
    if (user.loggedIn === true) {
      navigate('/')
    }
  },[user, navigate])

  return (
    <div className={style.registration_form_container}>
      <form action="/login" method="post" onSubmit={registrationFunction} autoComplete='off'>
        <div className={style.namefield}><label htmlFor="name">Имя</label></div>
        <div className={style.input}><input type="text" placeholder="Введите имя" name="name" id="name" required /></div>
        <div className={style.namefield}><label htmlFor="email">Электронная почта</label></div>
        <div className={style.input}><input type="email" placeholder="Введите ваш e-mail" name="email" id="email" /></div>
        <div className={style.namefield}><label htmlFor="password">Пароль</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль" name="password" id="password" /></div>
        <div className={style.namefield}><label htmlFor="repeat_password">Повторите пароль</label></div>
        <div className={style.input}><input type="password" placeholder="Введите пароль еще раз" name="repeat_password" id="repeat_password" /></div>
        <div>
        {!user.loggedIn && user.message}
        </div>
        <div><input type="submit" value="Зарегистрироваться" /></div>
      </form>
    </div>
  );
}

export default Registration;

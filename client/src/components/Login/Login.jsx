import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearUserMessageAC, fetchLoggedInUserAC } from '../../redux/actionCreators/userAC';
import styles from './Login.module.css'

function Login(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(clearUserMessageAC())
  },[dispatch])

  const loginUser = useCallback((event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    } 
    dispatch(fetchLoggedInUserAC(body))
    event.target.reset()
  }, [dispatch])

  useEffect(() => {
    if (user.loggedIn === true) {
      navigate('/')
    }
  },[user, navigate])

  return (
    <div className={styles.loginOuterContainer}>
      <form className={styles.formContainer} method='post' onSubmit={loginUser} autoComplete='off'>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Электронная почта</label>
          <input type='email' className='form-control' placeholder='Введите электронную почту' name='email' id='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Пароль</label>
          <input type='password' className='form-control' placeholder='Введите пароль' name='password' id='password' />
        </div>
        <div className={styles.errorStatusBox}>
          <p className={styles.validationError}>{!user.loggedIn && user.message}</p>
        </div>
        <div className={styles.button}><input type='submit' className={`btn m-3 ${styles.buttonColor}`} value='Войти' /></div>
      </form>
    </div>
  );
}

export default Login;

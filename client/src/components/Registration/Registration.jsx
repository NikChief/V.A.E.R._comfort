import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearUserMessageAC, fetchRegisterUserAC } from '../../redux/actionCreators/userAC';
import styles from './Registration.module.css'

function Registration(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userState);

  useEffect(() => {
    dispatch(clearUserMessageAC())
  },[dispatch])

  const registerUser = useCallback((event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      repeatPassword: event.target.repeat_password.value,
    }
    
    dispatch(fetchRegisterUserAC(body))
    event.target.reset()
  }, [dispatch])

  useEffect(() => {
    if (user.loggedIn === true) {
      navigate('/')
    }
  },[user, navigate])

  return (
    <div className={styles.registrationOuterContainer}>
      <form className={styles.formContainer} method='post' onSubmit={registerUser} autoComplete='off'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Имя</label>
          <input type='text' className='form-control' placeholder='Введите имя' name='name' id='name' required />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Электронная почта</label>
          <input type='email' className='form-control' placeholder='Введите электронную почту' name='email' id='email' />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Пароль</label>
          <input type='password' className='form-control' placeholder='Введите пароль' name='password' id='password' />
          <p className={styles.pwText}>* Пароль должен содержать минимум 8 символов, заглавные буквы, строчные буквы, цифры, специальные символы, не должен содержать пробелов.</p>
        </div>
        <div className='mb-3'>
          <label htmlFor='repeat_password' className='form-label'>Повторите пароль</label>
          <input type='password' className='form-control' placeholder='Повторите пароль' name='repeat_password' id='repeat_password' />
        </div>
        <div className={styles.errorStatusBox}>
          <p className={styles.validationError}>{!user.loggedIn && user.message}</p>
        </div>
        <div className={styles.button}>
          <input type='submit' className='btn btn-primary' value='Зарегистрироваться' />
        </div>
      </form>
    </div>
  );
}

export default Registration;

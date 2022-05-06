import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { clearUserMessageAC, fetchRegisterUserAC } from '../../redux/actionCreators/userAC';

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
    <div>
      <form action='/login' method='post' onSubmit={registrationFunction} autoComplete='off'>
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
        </div>
        <div className='mb-3'>
          <label htmlFor='repeat_password' className='form-label'>Повторите пароль</label>
          <input type='password' className='form-control' placeholder='Повторите пароль' name='repeat_password' id='repeat_password' />
        </div>
        <div>
          <input type='submit' className='btn btn-primary' value='Зарегистрироваться' />
        </div>
      </form>
    </div>
  );
}

export default Registration;

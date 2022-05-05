import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { initOrderMessageAC } from '../../redux/actionCreators/ordersAC';
import Login from '../Login/Login';
import styles from './OrderForm.module.css'

function OrderForm(props) {

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.userState);
  const { orderMessage } = useSelector(state => state.ordersState);

  const proceedOrder = (e) => {
    e.preventDefault(proceedOrder);

    const body = {
      user_id: user.userId ? user.userId : null,
      status: 'В обработке',
      address: e.target.address.value,
      phone: e.target.phone.value,
      // name: e.target.name.value,
    }

    fetch('/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
     .then(res => res.json())
     .then(data => dispatch(initOrderMessageAC(data)))
     localStorage.clear()
    //  .then(data => console.log(data, 'data'))
  }

  return (
    <div className={styles.orderOuterContainer}>
      <div className={styles.orderInnerContainer}>
        <h5>
          Доставка
        </h5>
        <form onSubmit={proceedOrder}>
          <div className='mb-3'>
            <label for='address' className='form-label'>Адрес (указать город, индекс, адрес)</label>
            <input required type='text' className='form-control' id='address' placeholder='Введите адрес (указать город, индекс, адрес)'></input>
          </div>
          <div className='mb-3'>
            <label for='phone' className='form-label'>Телефон</label>
            <input required type='text' className='form-control' id='phone' placeholder='Введите номер телефона'></input>
          </div>
          {/* <div className='mb-3'>
            <label for='name' className='form-label'>Имя</label>
            <input required type='text' className='form-control' id='name' placeholder='Введите имя'></input>
          </div> */}
          <div>
            {orderMessage.message}
          </div>
          <button type='submit' className='btn btn-primary'>Оформить заказ</button>
        </form>
      </div>
      <div className={styles.orderInnerContainer}>
        <h5>
          Войдите в систему
        </h5>
        <Login />
        <Link to='/registration'>Зарегистрироваться</Link>
      </div>
    </div>
    
  );
}

export default OrderForm;

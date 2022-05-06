import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearBasketAC } from '../../redux/actionCreators/basketAC';
import { fetchInitOrderAC } from '../../redux/actionCreators/ordersAC';
import styles from './OrderForm.module.css'

function OrderForm(props) {

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.userState);

  const { orderMessage } = useSelector(state => state.ordersState);

  const { basketItems } = useSelector(state => state.basketState);

  const proceedOrder = (e) => {
    e.preventDefault(proceedOrder);

    const newOrder = {
      user_id: user.userId ? user.userId : null,
      status: 'В обработке',
      address: e.target.address.value,
      phone: e.target.phone.value,
      // name: e.target.name.value,
    }

    dispatch(fetchInitOrderAC(newOrder))
    dispatch(clearBasketAC())
    localStorage.clear()
    
  }

  return (
    <>
    { 
    (orderMessage !== '')
    ?
    <div className={`card ${styles.successPurchaseContainer}`}>
      <div className='card-body'>
        <h5 className='card-title'>{orderMessage.message}</h5>
      </div>
    </div>
    :
    (basketItems.length !== 0)
    &&
    (<div className={styles.orderOuterContainer}>
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
          <button type='submit' className='btn btn-primary'>Оформить заказ</button>
        </form>
      </div>
    </div>)
    }
    </>
  )
};

export default OrderForm;

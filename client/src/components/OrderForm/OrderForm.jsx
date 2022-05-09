import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { clearBasketAC } from '../../redux/actionCreators/basketAC';
import { clearCurrentOrderAC, fetchAddOrderItemAC, fetchInitCurrentOrderAC } from '../../redux/actionCreators/ordersAC';
import styles from './OrderForm.module.css'

function OrderForm(props) {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { user } = useSelector(state => state.userState);
  const { currentOrder, currentOrderMessage } = useSelector(state => state.ordersState);
  const { basketItems } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);

  useEffect(() => {
    let orderItems = [];

    if (currentOrder !== '') {
      for (let i = 0; i < basketItems.length; i += 1) {
        const obj = {};
        obj.item_id = itemsInfoFromDb[i].id;
        obj.count = basketItems[i].count;
        obj.order_id = currentOrder.currentOrder?.id;
        obj.main_color_id = basketItems[i]?.main_color_id;
        obj.extra_color1_id = basketItems[i]?.extra_color1_id;
        obj.extra_color2_id = basketItems[i]?.extra_color2_id;
        obj.base_size = basketItems[i].base_size;
        obj.bust = basketItems[i]?.bust;
        obj.hip_girth = basketItems[i]?.hip_girth;
        obj.waistline = basketItems[i]?.hip_girth;
        obj.pants_length_inseam = basketItems[i]?.pants_length_inseam;
        obj.groin_to_bone = basketItems[i]?.groin_to_bone;
        orderItems.push(obj)
      }
      console.log(orderItems, 'orderItems')
      dispatch(fetchAddOrderItemAC(orderItems))
    }

  }, [currentOrder, basketItems, itemsInfoFromDb, dispatch])

  const proceedOrder = (e) => {
    e.preventDefault(proceedOrder);

    const newOrder = {
      user_id: user.userId ? user.userId : null,
      status: 'В обработке',
      address: e.target.address.value,
      phone: e.target.phone.value,
      // name: e.target.name.value,
    }
    
    dispatch(fetchInitCurrentOrderAC(newOrder))
    localStorage.clear()
    // alert(currentOrderMessage)
    // navigate('/')
  }

  return (
    <>
    {
    (user.loggedIn)
    ?
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
    :
    <div>
      <p>Пожалуйста войдите в систему или зарегистрируйтесь</p>
    </div>
    
    }
    </>
  )
};

export default OrderForm;

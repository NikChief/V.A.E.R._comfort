import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import { allOrdersAC, completedOrdersAC, confirmedOrdersAC, fetchInitOrdersAC, fullfiledOrdersAC, initOrdersAC, inProcessingOrdersAC, onDeliveryOrdersAC, paidOrdersAC, payedOrdersAC, rejectedOrdersAC } from '../../redux/actionCreators/ordersAC';
import ProfileOrderString from '../ProfileOrderString/ProfileOrderString';
import OrderDetails from '../OrderDetails/OrderDetails';

function Profile(props) {
  const { user } = useSelector(state => state.userState);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {orders}  = useSelector(state => state.ordersState);
  console.log('18', orders);
  // fetch('/profile')
  //   .then(res => console.log(res))

  useEffect(()=>{
    dispatch(fetchInitOrdersAC())
  }, [dispatch])

  function changeOrdersState(event) {
    if (event.target.value === 'Все') {
      dispatch(allOrdersAC())
    }
    if (event.target.value === 'В обработке') {
      dispatch(inProcessingOrdersAC())
    }
    if (event.target.value === 'Подтвержден') {
      dispatch(confirmedOrdersAC())
    }
    if (event.target.value === 'Отменен') {
      dispatch(rejectedOrdersAC())
    }
    if (event.target.value === 'Оплачен') {
      dispatch(paidOrdersAC())
    }
    if (event.target.value === 'Передан в доставку') {
      dispatch(onDeliveryOrdersAC())
    }
    if (event.target.value === 'Выполнен') {
      dispatch(completedOrdersAC())
    }
  }

  return (
    <div>
      {user.loggedIn ?
        (<div className='container' >
          <h3>Личная информация</h3>
          <div>Имя: </div>
          <div>{user.userName}</div>
          <div>E-mail: </div>
          <div>{user.userEmail}</div>
          <br />
          <h3>История заказов</h3>
          <div>
            <select onChange={changeOrdersState} className="form-select" aria-label="Default select example">
              <option value="Все" defaultValue>Все заказы</option>
              <option value="В обработке">Заказы в обработке</option>
              <option value="Подтвержден">Подтвержденные заказы</option>
              <option value="Отменен">Отмененные заказы</option>
              <option value="Оплачен">Оплаченные заказы</option>
              <option value="Передан в доставку">Заказы, переданные в доставку</option>
              <option value="Выполнен">Выполненные заказы</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Номер заказа</th>
                <th scope="col">Дата создания</th>
                <th scope="col">Статус заказа</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {(orders.length) ? (orders.map(order =>
                < ProfileOrderString key={order.id} order={order} />
              )) : (<div>Нет заказов</div>)}
            </tbody>
          </table>
        </div>)
        : navigate('/')}
    </div>
  );
}

export default Profile;
//

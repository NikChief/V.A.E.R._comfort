import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import { allOrdersAC, completedOrdersAC, fetchInitOrdersAC, fullfiledOrdersAC, initOrdersAC, payedOrdersAC, rejectedOrdersAC } from '../../redux/actionCreators/ordersAC';
import ProfileOrderString from '../ProfileOrderString/ProfileOrderString';

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
  // useEffect(() => {
  //   fetch('/profile')
  //     .then(res => res.json())
  //     .then(data => dispatch(initOrdersAC(data.orders)))
  //     // .then(data => console.log(data.orders)))
  //     .catch(err => console.log(err.message))
  // }, [dispatch])

  function changeOrdersState(event) {
    if (event.target.value === 'fullfiled') {
      dispatch(fullfiledOrdersAC())
    }
    if (event.target.value === 'all') {
      dispatch(allOrdersAC())
    }
    if (event.target.value === 'completed') {
      dispatch(completedOrdersAC())
    }
    if (event.target.value === 'rejected') {
      dispatch(rejectedOrdersAC())
    }
    if (event.target.value === 'payed') {
      dispatch(payedOrdersAC())
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
              <option value="all" selected>Все заказы</option>
              <option value="fullfiled">Подтвержденные заказы</option>
              <option value="rejected">Отмененные заказы</option>
              <option value="completed">Выполненные заказы</option>
              <option value="payed">Оплаченные заказы</option>
            </select>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Номер заказа</th>
                <th scope="col">Сумма заказа</th>
                <th scope="col">Статус заказа</th>
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

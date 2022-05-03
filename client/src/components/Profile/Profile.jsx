import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const { user } = useSelector(state => state.userState);
  console.log(user);
  const navigate = useNavigate();
  // const { orders } = useSelector(state => state.ordersState);
  // const userHardcode = {
  //   name: 'Mr.Hardcode',
  //   email: 'mrhardcode@mrhardcode'
  // }
  const ordersHardcode = [{
    id: 1,
    sum: 55,
    status: 'fullfiled'
  },
  {
    id: 4,
    sum: 45,
    status: 'rejected'
  },
  {
    id: 5,
    sum: 35,
    status: 'payed'
  },
  {
    id: 9,
    sum: 35,
    status: 'completed'
  },
  {
    id: 4,
    sum: 55,
    status: 'fullfiled'
  }]
  //хардкод начался
  const [orders, setOrders] = useState(ordersHardcode);

  function userOrdersFunction(event) {
    event.preventDefault();
    console.log(orders);
    setOrders(ordersHardcode.filter(order => event.target.value === 'all' ? true : order.status === event.target.value))
    // console.log(event.target.value)
    console.log(orders)
  }

  return (
    <div>
    { user.loggedIn ? 
    (<div className='container' >
      <h3>Личная информация</h3>
      <div>Имя: </div>
      <div>{user.userId}</div>
      <div>E-mail: </div>
      <div>{user.userEmail}</div>
      <br />
      <h3>История заказов</h3>
      <div>
        <select onChange={userOrdersFunction} class="form-select" aria-label="Default select example">
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
          {(orders.length) ? (orders.map(order => <tr>
            <td>{order.id}</td>
            <td>{order.sum}</td>
            <td>{order.status}</td>
          </tr>)) : (<div>Нет заказов</div>)}
        </tbody>
      </table>
    </div>)
    : navigate('/')}
    </div>
  );
}

export default Profile;

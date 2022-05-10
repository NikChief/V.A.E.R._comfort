import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import { allOrdersAC, completedOrdersAC, confirmedOrdersAC, fetchInitOrdersAC, fullfiledOrdersAC, initOrdersAC, inProcessingOrdersAC, onDeliveryOrdersAC, paidOrdersAC, payedOrdersAC, rejectedOrdersAC } from '../../redux/actionCreators/ordersAC';
import ProfileOrderString from '../ProfileOrderString/ProfileOrderString';
import OrderDetails from '../OrderDetails/OrderDetails';
import { fetchEditUserAC } from '../../redux/actionCreators/userAC';

function AdminProfile(props) {
  const { user } = useSelector(state => state.userState);
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.ordersState);
  // console.log('18', orders);
  // fetch('/profile')
  //   .then(res => console.log(res))

  useEffect(() => {
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

  const editProfileFunction = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    dispatch(fetchEditUserAC(body))
    alert(user.editErrorMessage)
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
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Изменить данные профиля
          </button>
          <br />
          <br />
          {/* <!-- Modal --> */}
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Окно изменения личной информации</h5>
                </div>
                <div class="modal-body">
                  <form action='/editprofile' onSubmit={editProfileFunction} method='post' autoComplete='off'>
                    <div className='mb-3'>
                      <label htmlFor='name' className='form-label'>Новое имя</label>
                      <input type='text' className='form-control' placeholder={user.userName} name='name' id='name' required />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>Новая электронная почта</label>
                      <input type='email' className='form-control' placeholder={user.userEmail} name='email' id='email' required />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='name' className='form-label'>Новый пароль</label>
                      <input type='password' className='form-control' name='password' id='password' required />
                    </div>
                    <div>
                      <input type='submit' className='btn btn-primary' data-bs-dismiss="modal" value='Сохранить изменения' />
                    </div>
                  </form>
                  <hr />
                  <div>Внимание! Обращаем внимание, что e-mail, указанный в форме ниже должен быть уникален,а поля формы не могут быть пустыми. После успешного редактирования личной информации, вы будете разлогинены и переадресованы на главную страницу. Для доступа в профиль необходимо вновь войти в систему с новыми данными.</div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" style={{ margin: "0 auto" }} data-bs-dismiss="modal">Закрыть без изменений</button>
                </div>
              </div>
            </div>
          </div>
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
              {(orders?.length) ? (orders.map(order =>
                <ProfileOrderString key={order.id} order={order} />
              )) : (<div>Нет заказов</div>)}
            </tbody>
          </table>
        </div>)
        : navigate('/')}
    </div>
  );
}

export default AdminProfile;
//
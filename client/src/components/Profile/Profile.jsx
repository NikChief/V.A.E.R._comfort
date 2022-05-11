import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
import { allOrdersAC, completedOrdersAC, confirmedOrdersAC, fetchInitOrdersAC, filterOrdersAC, fullfiledOrdersAC, initOrdersAC, inProcessingOrdersAC, onDeliveryOrdersAC, paidOrdersAC, payedOrdersAC, rejectedOrdersAC } from '../../redux/actionCreators/ordersAC';
import ProfileOrderString from '../ProfileOrderString/ProfileOrderString';
import OrderDetails from '../OrderDetails/OrderDetails';
import { fetchEditUserAC } from '../../redux/actionCreators/userAC';
import { getOrdersInfoAC, getPersonalInfoAC } from '../../redux/actionCreators/profileAC';
import styles from './Profile.module.css'


function Profile(props) {
  const { user } = useSelector(state => state.userState);
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, ordersInfo, ordersInfoFiltered } = useSelector(state => state.ordersState);
  // console.log('18', orders);
  // fetch('/profile')
  //   .then(res => console.log(res))

  useEffect(() => {
    dispatch(fetchInitOrdersAC())
  }, [dispatch])

  function filterOrders(event) {
    const orderStatus = event.target.value;
    if (orderStatus === 'Все') {
      dispatch(allOrdersAC())
    } else {
      dispatch(filterOrdersAC(orderStatus))
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
  const { personalInfoView } = useSelector(state => state.profileState);

  const getPersonalInfo = () => {
    dispatch(getPersonalInfoAC());
  }

  const getOrdersInfo = () => {
    dispatch(getOrdersInfoAC());
  }

  return (
    <div>
      <div className={styles.container}>
        <aside className={styles.container__sidebar}>
          <div className={styles.buttonsContainer}>
            <div onClick={getPersonalInfo} className={styles.buttonContainer}>
              <h4 className={styles.button}>Личная информация</h4>
            </div>
            <div className={styles.buttonContainer}>
              <div onClick={getOrdersInfo} className={styles.button}>
                <div>
                  <h4>Заказы</h4>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className={styles.container__main}>
          {
            personalInfoView
            &&
            <div id='PersonalInfoBox' className={styles.personalInfoBox}>
              <h4>Личная информация</h4>
              <div><h5>Имя:</h5></div>
              <p>{user.userName}</p>
              {/* <div>{user.userName}</div> */}
              <div><h5>Электронная почта:</h5></div>
              {/* <div>{user.userEmail}</div> */}
              <p>{user.userEmail}</p>
              <div><button type="button" className={`btn ${styles.buttonColor}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Изменить данные профиля
              </button></div>
            </div>

          }
          {
            !personalInfoView
            && <>
              <div id='PersonalInfoBox' className={styles.personalInfoBox}>
                <h4>История заказов</h4>
                <div>
                  <select onChange={filterOrders} className="form-select" aria-label="Default select example">
                    <option value="Все" defaultValue>Все заказы</option>
                    <option value="В обработке">Заказы в обработке</option>
                    <option value="Подтвержден">Подтвержденные заказы</option>
                    <option value="Отменен">Отмененные заказы</option>
                    <option value="Оплачен">Оплаченные заказы</option>
                    <option value="Передан в доставку">Заказы, переданные в доставку</option>
                    <option value="Выполнен">Выполненные заказы</option>
                  </select>
                  </div>

                  {(ordersInfoFiltered?.length) ? (ordersInfoFiltered.map(order =>
                    <ProfileOrderString key={order.id} order={order} />
                  )) : (<div> Нет заказов</div>)}
              </div>
              </>
          }
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <h5 className={`modal-title ${styles.modalTitle}`} id="staticBackdropLabel">Окно изменения личной информации</h5>
                    <div class="modal-header">
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
            </main>
    </div>
    </div >
  )
}

export default Profile;

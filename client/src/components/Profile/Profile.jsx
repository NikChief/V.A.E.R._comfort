import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { allOrdersAC, completedOrdersAC, confirmedOrdersAC, fetchInitOrdersAC, filterOrdersAC, fullfiledOrdersAC, initOrdersAC, inProcessingOrdersAC, onDeliveryOrdersAC, paidOrdersAC, payedOrdersAC, rejectedOrdersAC } from '../../redux/actionCreators/ordersAC';
import ProfileOrderString from '../ProfileOrderString/ProfileOrderString';
import OrderDetails from '../OrderDetails/OrderDetails';
import { fetchEditUserAC, fetchEditUserEmailAC, fetchEditUserNameAC, fetchEditUserPasswordAC } from '../../redux/actionCreators/userAC';
import { getOrdersInfoAC, getPersonalInfoAC } from '../../redux/actionCreators/profileAC';
import styles from './Profile.module.css'
import { useCallback } from 'react';


function Profile(props) {

  const dispatch = useDispatch();

  
  const { user } = useSelector(state => state.userState);
  const { ordersInfoFiltered } = useSelector(state => state.ordersState);

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

      const editUserName = useCallback((event) => {
        event.preventDefault();
        const body = {
          name: event.target.name.value,
        }
        dispatch(fetchEditUserNameAC(body))
        if (user.editErrorMessage) {
          alert(user.editErrorMessage)
        }
      }, [dispatch, user.editErrorMessage])
    
      const editUserEmail = useCallback((event) => {
        event.preventDefault();
        const body = {
          email: event.target.email.value,
        }
        dispatch(fetchEditUserEmailAC(body))
        if (user.editErrorMessage) {
          alert(user.editErrorMessage)
        }
      }, [dispatch, user.editErrorMessage])
    
      const editUserPassword = useCallback((event) => {
        event.preventDefault();
        const body = {
          password: event.target.password.value,
        }
        console.log('====', body)
        dispatch(fetchEditUserPasswordAC(body))
        if (user.editErrorMessage) {
          alert(user.editErrorMessage)
        }
      }, [dispatch, user.editErrorMessage])

      
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
            <div className={styles.buttonContainer}>
              <h4 onClick={getPersonalInfo} className={!personalInfoView ? `${styles.button} ${styles.buttonFont}` : `${styles.button} ${styles.buttonFont} ${styles.buttonOn}`}>Личная информация</h4>
            </div>
            <div className={styles.buttonContainer}>
              <div onClick={getOrdersInfo} className={personalInfoView ? `${styles.button} ${styles.buttonFont}` : `${styles.button} ${styles.buttonFont} ${styles.buttonOn}`}>
                <div>
                  <h4 className={styles.buttonFont}>Заказы</h4>
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
              <div><h6>Имя:</h6></div>
              <p>{user.userName}</p>
              <div>
                <button type='button' className={`btn ${styles.buttonColor}`} data-bs-toggle='modal' data-bs-target='#editName'>
                  Изменить имя
                </button>
              </div>
              <div className={styles.personalInfoInnerBox}><h6>Электронная почта:</h6></div>
              <p>{user.userEmail}</p>
              <div>
                <button type='button' className={`btn ${styles.buttonColor}`} data-bs-toggle='modal' data-bs-target='#editEmail'>
                Изменить электронную почту
                </button>
              </div>
              <div className={styles.personalInfoInnerBox}>
                <button type='button' className={`btn ${styles.buttonColor}`} data-bs-toggle='modal' data-bs-target='#editPassword'>
                  Изменить пароль
                </button>
              </div>
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
          <div class='modal fade' id='editName' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                <h5 className={`modal-title ${styles.modalTitle}`} id='staticBackdropLabel'>Окно изменения личной информации</h5>
                <div class='modal-header'>
                </div>
                <div class='modal-body'>
                  <form action='/editprofile' onSubmit={editUserName} method='put' autoComplete='off'>
                    <div className='mb-3'>
                      <label htmlFor='name' className='form-label'>Введите имя:</label>
                      <input type='text' className='form-control' defaultValue={user.userName} name='name' id='name' required/>
                    </div>
                    <div>
                      <input type='submit' className={`btn ${styles.buttonColor}`} data-bs-dismiss='modal' value='Сохранить изменения' />
                    </div>
                  </form>
                  <hr />
                  <div><p className={styles.modalFooter}>Обращаем внимание, что поле не может быть пустым. После успешного редактирования личной информации, вы будете переадресованы на главную страницу и вам нужно будет снова войти в личный кабинет.</p></div>
                </div>
                <div class='modal-footer'>
                  <button type='button' class='btn btn-secondary' style={{ margin: '0 auto' }} data-bs-dismiss='modal'>Закрыть без изменений</button>
                </div>
              </div>
            </div>
          </div>

          <div class='modal fade' id='editEmail' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                <h5 className={`modal-title ${styles.modalTitle}`} id='staticBackdropLabel'>Окно изменения личной информации</h5>
                <div class='modal-header'>
                </div>
                <div class='modal-body'>
                  <form action='/editprofile' onSubmit={editUserEmail} method='put' autoComplete='off'>
                  <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>Введите электронную почту:</label>
                      <input type='email' className='form-control' defaultValue={user.userEmail} name='email' id='email' required />
                    </div>
                    <div>
                      <input type='submit' className={`btn ${styles.buttonColor}`} data-bs-dismiss='modal' value='Сохранить изменения' />
                    </div>
                  </form>
                  <hr />
                  <div><p className={styles.modalFooter}>Обращаем внимание, что поле не может быть пустым. После успешного редактирования личной информации, вы будете переадресованы на главную страницу и вам нужно будет снова войти в личный кабинет.</p></div>
                </div>
                <div class='modal-footer'>
                  <button type='button' class='btn btn-secondary' style={{ margin: '0 auto' }} data-bs-dismiss='modal'>Закрыть без изменений</button>
                </div>
              </div>
            </div>
          </div>

          <div class='modal fade' id='editPassword' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div class='modal-dialog'>
              <div class='modal-content'>
                <h5 className={`modal-title ${styles.modalTitle}`} id='staticBackdropLabel'>Окно изменения личной информации</h5>
                <div class='modal-header'>
                </div>
                <div class='modal-body'>
                  <form action='/editprofile' onSubmit={editUserPassword} method='put' autoComplete='off'>
                  <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>Введите новый пароль:</label>
                      <input type='text' className='form-control' name='password' id='password' required />
                    </div>
                    <div>
                      <input type='submit' className={`btn ${styles.buttonColor}`} data-bs-dismiss='modal' value='Сохранить изменения' />
                    </div>
                  </form>
                  <hr />
                  <div><p className={styles.modalFooter}>Обращаем внимание, что поле не может быть пустым. После успешного редактирования личной информации, вы будете переадресованы на главную страницу и вам нужно будет снова войти в личный кабинет.</p></div>
                </div>
                <div class='modal-footer'>
                  <button type='button' class='btn btn-secondary' style={{ margin: '0 auto' }} data-bs-dismiss='modal'>Закрыть без изменений</button>
                </div>
              </div>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  )
}

export default Profile;

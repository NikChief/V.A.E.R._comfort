import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getOrdersInfoAC, getPersonalInfoAC } from '../../redux/actionCreators/profileAC';
import styles from './ProfileAdmin.module.css'

function ProfileAdmin(props) {

  const dispatch = useDispatch()
  const { personalInfoView } = useSelector(state => state.profileState);

  const getPersonalInfo = useCallback(() => {
    dispatch(getPersonalInfoAC());
  }, [dispatch])

  const getOrdersInfo = useCallback(() => {
    dispatch(getOrdersInfoAC());
  }, [dispatch])

  return (
    <div>
      <div className={styles.container}>
        <aside className={styles.container__sidebar}>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <h4 onClick={getPersonalInfo} className={styles.button}>Личная информация</h4>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <div>
                <h4 onClick={getOrdersInfo}>Заказы</h4>
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
            <p>Имя</p>
            {/* <div>{user.userName}</div> */}
            <div><h5>Электронная почта:</h5></div>
            {/* <div>{user.userEmail}</div> */}
            <p>Электронная почта</p>
          </div>
          }
          { 
          !personalInfoView 
          &&
          <div id='OrderTableBox'>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Номер заказа</th>
                  <th scope="col">Дата создания</th>
                  <th scope="col">Статус заказа</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                заказы
              </tbody>
            </table>
          </div>
          }
        </main>
      </div>
    </div>
  );
}

export default ProfileAdmin;

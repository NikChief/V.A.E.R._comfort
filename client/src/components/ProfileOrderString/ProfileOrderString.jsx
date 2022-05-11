import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styles from './ProfileOrderString.module.css'
import { useSelector } from 'react-redux';
import ChangeStatus from '../ChangeStatus/ChangeStatus';

function ProfileOrderString({ order }) {
  const { orders} = useSelector(state => state.ordersState);
  const { user } = useSelector(state => state.userState);


  console.log(order)
  return (
    <div className={styles.orderContainer}>
      <div class="card text-dark bg-light mb-3" style={{ maxWidth: "18 rem" }}>
        <div class="card-header"><h5 className="card-title">Заказ №{order.id} от {order.createdAt.match(/\d{4}.\d{2}.\d{2}.\d{2}:\d{2}:\d{2}/gm)[0].replace('T', ' ')}</h5></div>
          <div className={styles.orderDataContainer}>
            <div className={styles.orderDataInnerContainer}>
              <p className={styles.orderDataText}>Статус: {order.status}</p>
              <p className={styles.orderDataText}>Адрес доставки: {order.address}</p>
              <p className={styles.orderDataText}>Контактный телефон: {order.phone}</p>
            </div>
            <div className={styles.orderDataInnerContainer}>
              {user.userIsAdmin && <ChangeStatus key={order.id} order={order} />}
            </div>
          </div>  
      </div>
      {(orders.length) ? (<OrderDetails key={order.id} order={order} />) : (<></>)}
    </div>
  );
}

export default ProfileOrderString;

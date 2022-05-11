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

  const orderItems = orders.filter(el => el.order_id === order.id)
  const orderAmount = orderItems.reduce((prev, next) => prev + Number(next.Item.price)*Number(next.count), 0);

  console.log(order)
  return (
    <div className={`${styles.orderContainer}`}>
      <div class="text-dark mb-3" style={{ maxWidth: "18 rem" }}>
        <div class={`${styles.mb3rem}`}><h5 className={`${styles.orderHeader}`}>Заказ №{order.id} от {order.createdAt.match(/\d{4}.\d{2}.\d{2}/gm)[0].replace('T', ' ')}</h5></div>
          <div className={styles.orderDataInnerContainer}>
            <div className={styles.orderDataLeftContainer}>
              <p className={styles.orderDataText}><strong>Статус: </strong>{order.status}</p>
              <p className={styles.orderDataText}><strong>Адрес доставки: </strong>{order.address}</p>
              <p className={styles.orderDataText}><strong>Контактный телефон: </strong>{order.phone}</p>
            </div>
            <div className={styles.orderDataRightContainer}>
              <div className={styles.orderAmountContainer}>
              <p class={`${styles.mb05rem}`}><strong>Сумма заказа:</strong></p>
                <p class="card-text">{orderAmount} руб.</p>
              </div>
            <div>{user.userIsAdmin && <ChangeStatus key={order.id} order={order} />}</div>
            </div>
          </div>  
      {(orders.length) ? (<OrderDetails key={order.id} order={order} />) : (<></>)}
      </div>
    </div>
  );
}

export default ProfileOrderString;

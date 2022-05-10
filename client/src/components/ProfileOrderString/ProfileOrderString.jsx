import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import styles from './ProfileOrderString.module.css'

function ProfileOrderString({ order }) {
  return (
    <div className={styles.orderContainer}>
      <div class="card text-dark bg-light mb-3" style={{ maxWidth: "18 rem" }}>
        <div class="card-header"><h5 className="card-title">Заказ №{order.id} от {order.createdAt.match(/\d{4}.\d{2}.\d{2}.\d{2}:\d{2}:\d{2}/gm)[0].replace('T', ' ')}</h5></div>
        <div class="card-body">
          <p class="card-text">Статус: {order.Order.status}</p>
          <p class="card-text">Адрес доставки: {order.Order.address}</p>
          <p class="card-text">Контактный телефон: {order.Order.phone}</p>
        </div>
      </div>
      {<OrderDetails key={order.id} order={order} />}
    </div>
  );
}

export default ProfileOrderString;

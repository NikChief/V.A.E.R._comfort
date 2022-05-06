import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function ProfileOrderString({ order }) {
  const [orderViewDetails, setOrderViewDetails] = useState(false);
  return (
    <>
      <tr>
        <td>{order.id}</td>
        <td>{order.createdAt}</td>
        <td>{order.status}</td>
        <td><button onClick={() => setOrderViewDetails(!orderViewDetails)} className="btn btn-primary" type="button">
          {orderViewDetails ? <span>Скрыть информацию</span> : <span>Подробнее о заказе</span> }
        </button></td>
      </tr>
      {orderViewDetails && <tr><td colSpan={4}><div style={{}}>Состав заказа:</div></td></tr>}
    </>
  );
}

export default ProfileOrderString;

import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function ProfileOrderString({ order }) {
  return (
    <>
      <tr>
        <td>{order.id}</td>
        <td>{order.createdAt.match(/\d{4}.\d{2}.\d{2}.\d{2}:\d{2}:\d{2}/gm)[0].replace('T',' ')}</td>
        <td>{order.status}</td>
        <div class="col">{order.address}</div>
        <div class="col">{order.phone}</div>
      </tr>
      {<OrderDetails key={order.id} order={order}/>}
    </>
  );
}

export default ProfileOrderString;

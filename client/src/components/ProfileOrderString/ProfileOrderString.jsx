import React, { useState } from 'react';

function ProfileOrderString({ order }) {
  const [orderViewDetails, setOrderViewDetails] = useState(false)
  return (
    <>
      <tr>
        <td>{order.id}</td>
        <td>{order.createdAt}</td>
        <td>{order.status}</td>
        <td><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Подробнее о заказе
        </button></td>
      </tr>
    </>
  );
}

export default ProfileOrderString;

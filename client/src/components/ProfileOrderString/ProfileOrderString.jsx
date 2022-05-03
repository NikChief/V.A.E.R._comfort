import React from 'react';

function ProfileOrderString({order}) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.sum}</td>
      <td>{order.status}</td>
    </tr>
  );
}

export default ProfileOrderString;

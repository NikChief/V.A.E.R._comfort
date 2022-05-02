import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {
  const { user } = useSelector(state => state.userState);

  return (
    <div>
      <div>Имя</div>
      <div>{user.user_name}</div>
      <div>E-mail</div>
      <div>{user.user_email}</div>
      <div>История заказов:</div>
      <div>
        <ul>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

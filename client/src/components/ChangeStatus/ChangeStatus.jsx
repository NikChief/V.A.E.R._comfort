import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSetStatusOrderAC } from '../../redux/actionCreators/ordersAC';
import styles from './ChangeStatus.module.css'

function ChangeStatus({order}) {
  const { user } = useSelector(state => state.userState);
  const { orders, ordersInfo } = useSelector(state => state.ordersState);
  const dispatch = useDispatch();

  function changeStatusFunction(event) {
      dispatch(fetchSetStatusOrderAC({id: order.id, status: event.target.value}))
    }
  
  return (
    <div className={styles.changeStatusContainer}>
      <select onChange={changeStatusFunction} className="form-select" aria-label="Default select example">
        <option value="Изменить статус" selected disabled>Изменить статус заказа Покупателя</option>
        <option value="В обработке">Принять в обработку</option>
        <option value="Подтвержден">Подтвердить заказ</option>
        <option value="Отменен">Отменить заказ</option>
        <option value="Оплачен">Заказ оплачен</option>
        <option value="Передан в доставку">Передан в доставку</option>
        <option value="Выполнен">Заказ выполнен</option>
      </select>
    </div>
  );
}

export default ChangeStatus;

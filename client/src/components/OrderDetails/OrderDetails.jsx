import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitOrderDetailsAC } from '../../redux/actionCreators/orderDetailsAC';
import OrderDetail from '../OrderDetail/OrderDetail';
import styles from './OrderDetails.module.css'

function OrderDetails({ order }) {
  const { orders } = useSelector(state => state.ordersState)
  // const predproducts = new Set(orders.map(el=>el.order_id))
  const products = orders.filter(el => el.order_id === order.id)

  return (
    <div className={styles.orderDetailContainer}>
      <h6 className={styles.h6}>Детали заказа</h6>
      <div className={styles.orderDetailInnerContainer}>{products.map(product => <OrderDetail key={product.id} product={product} />)}</div>
      {/* {products.map(product => <OrderDetail key={product.id} product={product} />)} */}
      {/* <p class="card-text">Статус: {order.Order.status}</p>
          <p class="card-text">Адрес доставки: {order.Order.address}</p>
          <p class="card-text">Контактный телефон: {order.Order.phone}</p> */}
    </div>
    // <tr>
    //   <td colSpan={4}>
    //     <div>

    //       <div class="container">
    //         <div class="row row-cols-7">
    //          {products.map(product=> <OrderDetail key={product.id} product={product}/> )}

    //         </div>
    //       </div>
    //       {/* {orderDetails?.map((element) => <OrderDetail key={element.id} element={element}/>)} */}
    //     </div>
    //   </td>
    // </tr>
  );
}

export default OrderDetails;

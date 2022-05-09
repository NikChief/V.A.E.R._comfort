import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitOrderDetailsAC } from '../../redux/actionCreators/orderDetailsAC';
import OrderDetail from '../OrderDetail/OrderDetail';

function OrderDetails({ order }) {
  const { orders } = useSelector(state => state.ordersState)
console.log(orders)
const products = orders.filter(el=> el.order_id === order.id)

  return (
    <tr>
      <td colSpan={4}>
        <div>
         
          <div class="container">
            <div class="row row-cols-7">
             {products.map(product=> <OrderDetail key={product.id} product={product}/> )}
           
            </div>
          </div>
          {/* {orderDetails?.map((element) => <OrderDetail key={element.id} element={element}/>)} */}
        </div>
      </td>
    </tr>
  );
}

export default OrderDetails;

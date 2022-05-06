import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitOrderDetailsAC } from '../../redux/actionCreators/orderDetailsAC';

function OrderDetails({ order }) {
  const { orderDetails } = useSelector(state => state.orderDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitOrderDetailsAC(order.id))
  }, [dispatch, order.id])

  return (
    <tr>
      <td colSpan={4}>
        <div>
          <div>Информация о заказе:</div>
          <div class="container">
            <div class="row row-cols-7">
              <div class="col">Колонка 1</div>
              <div class="col">Колонка 2</div>
              <div class="col">Колонка 3</div>
              <div class="col">Колонка 4</div>
              <div class="col">Колонка 5</div>
              <div class="col">Колонка 6</div>
            </div>
          </div>
          {orderDetails.map((element) => <div key={element.id}>
            <div class="container">
              <div class="row row-cols-6">
                <div class="col">{element.item_id}</div>
                <div class="col">{element.count}</div>
                <div class="col">{element.order_item_size_id}</div>
                <div class="col">{element.main_color_id}</div>
                <div class="col">{element.extra_color1_id}</div>
                <div class="col">{element.extra_color2_id}</div>
              </div>
            </div>
          </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default OrderDetails;

import React from 'react';

function OrderDetail({product}) {
 
  return (
    <>
      <div key={product.id}>
        <div class="container">
          <div class="row row-cols-6">
            <div class="col">{product.item_id}</div>
            <div class="col">{product.count}</div>
            <div class="col">{product.order_item_size_id}</div>
            <div class="col">{product.main_color_id}</div>
            <div class="col">{product.extra_color1_id}</div>
            <div class="col">{product.extra_color2_id}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;

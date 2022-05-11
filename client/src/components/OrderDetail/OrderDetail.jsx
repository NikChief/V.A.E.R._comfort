import React from 'react';
import styles from './OrderDetail.module.css';

function OrderDetail({ product }) {
  console.log(product)

  return (
    <>
    <div className={styles.orderDetail}>
      <p class="card-text"><span className={styles.bold}>ID модели:</span> {product.item_id}</p>
      <p class="card-text"><span className={styles.bold}>Количество, шт:</span> {product.count}</p>
      <p class="card-text">Основной цвет: {product.main_color_id} </p>
      {product.extra_color1_id && <p class="card-text">Дополнительный цвет 1: {product.extra_color1_id}</p>}
      {product.extra_color2_id && <p class="card-text">Дополнительный цвет 2: {product.extra_color2_id}</p>}
      {product.Item.material_id && <p class="card-text"> ID Материала: {product.Item.material_id}</p>}
      {product.base_size && <p class="card-text">Базовый размер: {product.base_size}</p>}
      {product.bust && <p class="card-text">Бюст: {product.bust}</p>}
      {product.hip_girth && <p class="card-text">Обхват бедер: {product.hip_girth}</p>}
      {product.waistline && <p class="card-text">Обхват талии: {product.waistline}</p>}
      {product.pants_length_inseam && <p class="card-text">Длина брюк по внутреннему шву: {product.pants_length_inseam}</p>}
      {product.groin_to_bone && <p class="card-text">Длина от мотни до косточки на ноге: {product.groin_to_bone}</p>}
      <p class="card-text">Сумма за указанный Товар: {product.Item.price*product.count} руб.</p>
    </div>
    </>
  );
}

export default OrderDetail;

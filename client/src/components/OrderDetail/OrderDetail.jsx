import React from 'react';
import styles from './OrderDetail.module.css';

function OrderDetail({ product }) {
  console.log(product)
  
  return (
    <>
    <div className={styles.orderDetail}>
    <div className={styles.leftInnerContainer}>
      <p class="card-text"><span className={styles.bold}>ID модели:</span> {product.item_id}</p>
      <p class="card-text"><span className={styles.bold}>Количество, шт:</span> {product.count}</p>
      <p class="card-text"><span className={styles.bold}>Основной цвет:</span> {product.main_color_id} </p>
      {product.extra_color1_id && <p class="card-text"><span className={styles.bold}>Дополнительный цвет 1:</span> {product.extra_color1_id}</p>}
      {product.extra_color2_id && <p class="card-text"><span className={styles.bold}>Дополнительный цвет 2:</span> {product.extra_color2_id}</p>}
      {product.Item.material_id && <p class="card-text"><span className={styles.bold}>ID Материала:</span> {product.Item.material_id}</p>}
    </div>
    <div className={styles.rightInnerContainer}>
      {product.base_size && <p class="card-text"><span className={styles.bold}>Базовый размер:</span> {product.base_size}</p>}
      {product.bust && <p class="card-text"><span className={styles.bold}>Бюст:</span> {product.bust}</p>}
      {product.hip_girth && <p class="card-text"><span className={styles.bold}>Обхват бедер:</span> {product.hip_girth}</p>}
      {product.waistline && <p class="card-text"><span className={styles.bold}>Обхват талии:</span> {product.waistline}</p>}
      {product.pants_length_inseam && <p class="card-text"><span className={styles.bold}>Длина брюк по внутреннему шву:</span> {product.pants_length_inseam}</p>}
      {product.groin_to_bone && <p class="card-text"><span className={styles.bold}>Длина от мотни до косточки на ноге:</span> {product.groin_to_bone}</p>}
      <p class="card-text"><span className={styles.bold}>Сумма за указанный Товар:</span> {product.Item.price*product.count} руб.</p>
    </div>
    </div>
    </>
  );
}

export default OrderDetail;

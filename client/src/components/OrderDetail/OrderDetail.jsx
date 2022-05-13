import React from 'react';
import styles from './OrderDetail.module.css';

function OrderDetail({ product }) {

  return (
    <>

      <div className={styles.orderDetail}>
        <div className={styles.leftInnerContainer}>
          <p class="card-text"><span className={styles.bold}>Модель:</span> {product.pattern.name}</p>
          <div style={{ 'backgroundImage': `url(${process.env.REACT_APP_BASE_URL}/${product.pattern.image})`, 'margin-bottom':'1rem','min-height': '150px', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': '0%, 0%', 'backgroundSize': 'contain' }} ></div>
          <p class="card-text"><span className={styles.bold}>Количество, шт:</span> {product.count}</p>
          <p class="card-text"><span className={styles.bold}>Основной цвет:</span> {product.main_color_id} </p>
          {product.extra_color1_id && <p class="card-text"><span className={styles.bold}>Дополнительный цвет 1:</span> {product.extra_color1_id}</p>}
          {product.extra_color2_id && <p class="card-text"><span className={styles.bold}>Дополнительный цвет 2:</span> {product.extra_color2_id}</p>}
          {product.Item.material_id && <p class="card-text"><span className={styles.bold}>Материал:</span> {product.material.type}</p>}
        </div>
        <div className={styles.rightInnerContainer}>
          {product.base_size && <p class="card-text"><span className={styles.bold}>Базовый размер:</span> {product.base_size}</p>}
          {product.bust && <p class="card-text"><span className={styles.bold}>Бюст, см:</span> {product.bust}</p>}
          {product.hip_girth && <p class="card-text"><span className={styles.bold}>Обхват бедер, см:</span> {product.hip_girth}</p>}
          {product.waistline && <p class="card-text"><span className={styles.bold}>Обхват талии, см:</span> {product.waistline}</p>}
          {product.pants_length_inseam && <p class="card-text"><span className={styles.bold}>Длина брюк по внутреннему шву, см:</span> {product.pants_length_inseam}</p>}
          {product.groin_to_bone && <p class="card-text"><span className={styles.bold}>Длина от мотни до косточки на ноге, см:</span> {product.groin_to_bone}</p>}
          {product.comment && <p class="card-text"><span className={styles.bold}>Комментарий:</span> {product.comment}</p>}
          <p class="card-text"><span className={styles.bold}>Сумма за указанный Товар:</span> {product.Item.price * product.count} руб.</p>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;

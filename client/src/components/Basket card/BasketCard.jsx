import React from 'react';
import styles from './BasketCard.module.css'

function Basketcard({ orderItem }) {

  return (
    <div className={`${styles.basketCardOuterBox}`}>
      <div className={`card ${styles.basketCardBox}`}>
        <div>
          <img src="..." className="card-img-top" alt="..."></img>  
        </div>
        <div>
          <div>
            <h5 className="card-title">Модель:</h5>
            <p className="card-text">Будет название модели</p>
          </div>
          <div>
            <h5 className="card-title">Цвет:</h5>
            <div>
              <img src="..." className="card-img-top" alt="..."></img>
              <img src="..." className="card-img-top" alt="..."></img>  
              <img src="..." className="card-img-top" alt="..."></img>    
            </div>
          </div>
          <div>
            <h5 className="card-title">Ткань:</h5>
            <p className="card-text">Будет название ткани</p>
          </div>
          <div>
            <h5 className="card-title">Размеры:</h5>
            <p className="card-text">Будут размеры</p>
          </div>
        </div>
        <div>
         <button type="button" class="btn btn-primary btn-sm">Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Basketcard;

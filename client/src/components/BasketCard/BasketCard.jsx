import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItemFromBasketAC } from '../../redux/actionCreators/basketAC';
import styles from './BasketCard.module.css'

function Basketcard({ basketItem }) {

  const { basket } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);

  const dispatch = useDispatch();

  const deleteItemFromBasket = () => {
    dispatch(deleteItemFromBasketAC(basketItem.id))
  }

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify({basket, itemsInfoFromDb}));
  }, [basket, itemsInfoFromDb]);

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
            <h5 className="card-title">Цвета:</h5>
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
         <button onClick={deleteItemFromBasket} type="button" className="btn btn-primary btn-sm">Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Basketcard;

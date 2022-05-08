import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItemFromBasketAC } from '../../redux/actionCreators/basketAC';
import styles from './BasketCard.module.css'

function Basketcard({ basketItem, itemInfoFromDb }) {

  const { basketItems } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  console.log(basketItem, itemInfoFromDb, 'basketItem, itemInfoFromDb')

  const dispatch = useDispatch();

  const deleteItemFromBasket = () => {
    dispatch(deleteItemFromBasketAC(basketItem.id))
  }

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify({basketItems, itemsInfoFromDb}));
  }, [basketItems, itemsInfoFromDb]);

  return (
    <div className={`${styles.basketCardOuterBox}`}>
      <div className={`card ${styles.basketCardBox}`}>
        <div className={`${styles.basketCardImageBox}`}>
          <img src={`http://localhost:4000/${basketItem.pattern_image}`} className={`card-img-top ${styles.basketCardImage}`} alt="..."></img>  
        </div>
        <div className={`${styles.basketCardInfo}`}>
          <div className={`${styles.basketCardInfoInnerBox}`}>
            <div>
              <h5 className="card-title">Модель:</h5>
              <p className="card-text">{basketItem.pattern_name}</p>
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
              <p className="card-text">{basketItem.material_type}</p>
            </div>
            <div>
              <h5 className="card-title">Количество:</h5>
              <p className="card-text">{basketItem.count}</p>
            </div>
          </div>
          <div>
            <h5 className="card-title">Размеры:</h5>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Базовый размер:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.base_size}</h6>
                </div>
              </div>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Обхват груди:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.bust}</h6>
                </div>
              </div>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Обхват бедер:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.hip_girth}</h6>
                </div>
              </div>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Обхват талии:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.waistline}</h6>
                </div>
              </div>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Длина брюк по внутреннему шву:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.pants_length_inseam}</h6>
                </div>
              </div>
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6>Длина от мотни до косточки на ноге:</h6>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <h6 className={`${styles.sizeText}`}>{basketItem.groin_to_bone}</h6>
                </div>
              </div>
          </div>
        </div>
        <div>
          <h5 className="card-title">Стоимость:</h5>
          <h6>{Number(basketItem.count) * Number(itemInfoFromDb.price) + ' руб.'}</h6>
          <button onClick={deleteItemFromBasket} type="button" className="btn btn-primary btn-sm">Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Basketcard;

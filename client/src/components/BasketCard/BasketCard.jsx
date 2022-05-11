import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromBasketAC } from '../../redux/actionCreators/basketAC';
import styles from './BasketCard.module.css'

function Basketcard({ basketItem, itemInfoFromDb }) {

  const dispatch = useDispatch();

  const deleteItemFromBasket = useCallback(() => {
    dispatch(deleteItemFromBasketAC(basketItem.id))
  }, [dispatch, basketItem.id]);

  return (
    <div className={`${styles.basketCardOuterBox}`}>
      <div className={`card ${styles.basketCardBox}`}>
        <div className={`${styles.basketCardImageBox}`}>
          <img src={`${process.env.REACT_APP_BASE_URL}/${basketItem.pattern_image}`} className={`card-img-top ${styles.basketCardImage}`} alt="..."></img>  
        </div>
        <div className={`${styles.basketCardInfo}`}>
          <div className={`${styles.basketCardInfoInnerBox}`}>
            <div className={styles.patternBlock}>
              <h6 className="card-title">Модель:</h6>
              <p className={`${styles.valueText} card-text`}>{basketItem.pattern_name}</p>
            </div>
            <div className={styles.patternBlock}>
              <h6 className="card-title">Цвета:</h6>
              <div>
                <img src={`${process.env.REACT_APP_BASE_URL}/${basketItem.main_color_image}`} className={styles.colorChosenImage} alt="..."></img>
                {(basketItem.extra_color1_image !== 'pngwing.com.png') && <img src={`${process.env.REACT_APP_BASE_URL}/${basketItem.extra_color1_image}`} className={styles.colorChosenImage} alt="..."></img>}
                {(basketItem.extra_color2_image !== 'pngwing.com.png') && <img src={`${process.env.REACT_APP_BASE_URL}/${basketItem.extra_color2_image}`} className={styles.colorChosenImage} alt="..."></img>}   
              </div>
            </div>
            <div className={styles.patternBlock}>
              <h6 className="card-title">Ткань:</h6>
              <p className={`${styles.valueText} card-text`}>{basketItem.material_type}</p>
            </div>
            <div className={styles.patternBlock}>
              <h6 className="card-title">Количество:</h6>
              <p className={`${styles.valueText} card-text`}>{basketItem.count}</p>
            </div>
          </div>
          <div>
            <h6 className="card-title">Размеры:</h6>
              {
                basketItem.bust
              &&
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Обхват груди, см:</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.bust}</p>
                </div>
              </div>
              }
              {
              basketItem.hip_girth
              &&
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Обхват бедер, см:</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.hip_girth}</p>
                </div>
              </div>
              }
              {
              basketItem.waistline
              &&
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Обхват талии, см:</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.waistline}</p>
                </div>
              </div>
              }
              {
              basketItem.pants_length_inseam
              &&
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Длина брюк по внутреннему шву, см:</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.pants_length_inseam}</p>
                </div>
              </div>
              }
              {
              basketItem.groin_to_bone
              &&
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Длина от мотни до косточки на ноге, см:</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.groin_to_bone}</p>
                </div>
              </div>
              }
              <div className={`${styles.sizesOuterBox}`}>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.valueText} card-text`}>Размер (для костюмов данная информация справочно):</p>
                </div>
                <div className={`${styles.sizesInnerBox}`}>
                  <p className={`${styles.sizeText}`}>{basketItem.base_size}</p>
                </div>
              </div>
          </div>
        </div>
        <div className={styles.rightBox}>
          <h5 className="card-title">Стоимость*:</h5>
          <h6>{Number(basketItem.count) * Number(itemInfoFromDb.price) + ' руб.'}</h6>
          <p  className={`${styles.sizeText}`}>* на большие размеры цена может быть увеличена</p>
          <button onClick={deleteItemFromBasket} type="button"className={`btn m-3 btn-sm ${styles.choiceButton}`}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default Basketcard;

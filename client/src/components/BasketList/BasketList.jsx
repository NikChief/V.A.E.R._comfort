import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basketcard from '../BasketCard/BasketCard';
import { useDispatch } from 'react-redux';
import { initBasketTotalAC } from '../../redux/actionCreators/basketAC';
import styles from './BasketList.module.css'
import { Link } from 'react-router-dom';

function BasketList(props) {

  const dispatch = useDispatch()

  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  const { basketItems } = useSelector(state => state.basketState);
  const { basketTotal } = useSelector(state => state.basketState);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify({basketItems, itemsInfoFromDb}));
  }, [basketItems, itemsInfoFromDb]);
  
  useEffect(() => {
    let totalAmount = 0;
    for (let i = 0; i < basketItems.length; i += 1) {
      totalAmount = totalAmount + Number(basketItems[i].count) * Number(itemsInfoFromDb[i]?.price)
    }
    dispatch(initBasketTotalAC(totalAmount))
  },[basketItems, itemsInfoFromDb, dispatch])

  console.log(basketItems, '111')
  return (
    <>
    { 
    (basketItems.length !== 0)
    ?
    (
    <div className='container mx-5 mt-3'>
      <div className={styles.basketContainer}>
        <div id='basket_items' className={styles.basketInnerContainer}>
          {basketItems.map((item, i) => <Basketcard key={item.id} basketItem={item} itemInfoFromDb={itemsInfoFromDb[i]} />)}
        </div>
        {(basketItems.length !== 0)
        &&
        <div className='container'>
          <div id='basket_info' className={styles.price}>
            <div className="card-title">Общая стоимость:</div>
            <div className="card-text">
            {basketTotal + ' руб.'}
            </div>
            <Link to='/orderForm' className={`btn m-3 ${styles.choiceButton}`}>Перейти к оформлению</Link>
          </div>
        </div>
        }
      </div>
    </div>
    )
    :
    <div className={styles.messageContainer}>
      <div>
      <h4>Корзина пуста</h4>
      </div>
    </div>
    }
    </>
  );
}

export default BasketList;

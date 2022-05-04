import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basketcard from '../BasketCard/BasketCard';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { initBasketTotalAC } from '../../redux/actionCreators/basketAC';
import styles from './BasketList.module.css'

function BasketList(props) {

  const { basket } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  const { basketTotal } = useSelector(state => state.basketState);

  const dispatch = useDispatch()
  
  useEffect(() => {
    let totalAmount = 0;
    for (let i = 0; i < basket.length; i += 1) {
      totalAmount = totalAmount + Number(basket[i].count) * Number(itemsInfoFromDb[i].price)
    }
    dispatch(initBasketTotalAC(totalAmount))
  },[basket, itemsInfoFromDb, dispatch])
  

  return (
    <div className={styles.basketContainer}>
      <div id='basket items' className={styles.basketInnerContainer}>
        {basket.map(item => <Basketcard key={uuidv4()} orderItem={item} />)}
      </div>
      <div id='basket info' className={styles.basketInnerContainer}>
        <h5 className="card-title">Общая стоимость:</h5>
        <p className="card-text">
        {basketTotal + ' руб.'}
        </p>
      </div>
    </div>
  );
}

export default BasketList;

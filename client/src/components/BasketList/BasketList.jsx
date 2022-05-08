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
    let totalAmount = 0;
    for (let i = 0; i < basketItems.length; i += 1) {
      totalAmount = totalAmount + Number(basketItems[i].count) * Number(itemsInfoFromDb[i]?.price)
    }
    dispatch(initBasketTotalAC(totalAmount))
  },[basketItems, itemsInfoFromDb, dispatch])

  return (
    // {}
    <div className={styles.basketContainer}>
      <div id='basket_items' className={styles.basketInnerContainer}>
        {basketItems.map((item, i) => <Basketcard key={item.id} basketItem={item} itemInfoFromDb={itemsInfoFromDb[i]} />)}
      </div>
      {(basketItems.length !== 0)
      &&
      <div id='basket_info' className={styles.basketInnerContainer}>
        <h5 className="card-title">Общая стоимость:</h5>
        <p className="card-text">
        {basketTotal + ' руб.'}
        </p>
        <Link to='/orderForm' className='btn btn-primary'>Перейти к оформлению</Link>
      </div>
      }
    </div>
  );
}

export default BasketList;

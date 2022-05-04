import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basketcard from '../BasketCard/BasketCard';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getItemsInfoFromDbAC, initBasketTotalAC } from '../../redux/actionCreators/basketAC';

function BasketList(props) {

  const { basket } = useSelector(state => state.basketState);
  // console.log('basket', basket)

  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  // console.log('itemsInfoFromDb', itemsInfoFromDb)

  const { basketTotal } = useSelector(state => state.basketState);
  // console.log('itemsInfoFromDb', itemsInfoFromDb)

  const dispatch = useDispatch()
  
  // const dispatch =useDispatch();

  // useEffect(() => {
  //   for (let item of basket) {
  //     console.log('item', item)
  //     fetch(`/items/${item.pattern_id}/${item.material_id}`)
  //       .then(res=>res.json())
  //       .then(data=>dispatch(getItemsInfoFromDbAC(data)))
  //   }
  // }, [basket, dispatch])

  useEffect(() => {
    let totalOldAmount = 0;
    for (let i = 0; i < basket.length; i += 1) {
      totalOldAmount = totalOldAmount + Number(basket[i].count)
      console.log(totalOldAmount, 'totalOldAmount')
      // console.log(itemsInfoFromDb[i].price, 'itemsInfoFromDb.price')
    }
    dispatch(initBasketTotalAC(totalOldAmount))
  },[basket, itemsInfoFromDb, dispatch])
  

  return (
    <div>
      <div id='basket items'>
        {basket.map(item => <Basketcard key={uuidv4()} orderItem={item} />)}
      </div>
      <div id='basket info'>
        <h5 className="card-title">Общая стоимость:</h5>
        <p className="card-text">
        {basketTotal}
        </p>
        {/* <h5 className="card-title">Общая стоимость c учетом скидок:</h5>
        <p className="card-text">{totalNewAmount}</p> */}
      </div>
    </div>
  );
}

export default BasketList;

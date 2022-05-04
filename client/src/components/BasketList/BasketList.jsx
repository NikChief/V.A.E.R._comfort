import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Basketcard from '../BasketCard/BasketCard';

function BasketList(props) {

  const { basket } = useSelector(state => state.basketState)
  

  return (
    <div>
      <div id='basket items'>
        {basket.map(item => <Basketcard key={item.id} orderItem={item} />)}
      </div>
      <div id='basket info'>
        <h5 className="card-title">Общая стоимость:</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default BasketList;

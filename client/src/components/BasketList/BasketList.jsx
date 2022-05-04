import React from 'react';
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import Basketcard from '../BasketCard/BasketCard';

function BasketList(props) {

  // const { basket } = useSelector(state => state.userState)
  const basket = [
    {
      id: 1,
      item_id: 222,
      order_id: 101,
      base_size: 'S',
      bust: 90,
      hip_girth: 90,
      waistline: 60,
      pants_length_inseam: 100,
      groin_to_bone: 80,
      main_color_id: 11,
      extra_color1_id: 21,
      extra_color2_id: 31,
    },
    {
      id: 2,
      item_id: 223,
      order_id: 101,
      base_size: 'S',
      bust: 90,
      hip_girth: 90,
      waistline: 60,
      pants_length_inseam: 100,
      groin_to_bone: 80,
      main_color_id: 11,
      extra_color1_id: 21,
      extra_color2_id: 31,
    },
    {
      id: 3,
      item_id: 224,
      order_id: 101,
      base_size: 'S',
      bust: 90,
      hip_girth: 90,
      waistline: 60,
      pants_length_inseam: 100,
      groin_to_bone: 80,
      main_color_id: 11,
      extra_color1_id: 21,
      extra_color2_id: 31,
    },
    {
      id: 4,
      item_id: 225,
      order_id: 102,
      base_size: 'S',
      bust: 90,
      hip_girth: 90,
      waistline: 60,
      pants_length_inseam: 100,
      groin_to_bone: 80,
      main_color_id: 11,
      extra_color1_id: 21,
      extra_color2_id: 31,
    },
  ]

  useEffect(() => {
    
  })

  return (
    <div>
      <div id='basket items'>
        {basket.map(item => <Basketcard key={item.id} orderItem={item} />)}
      </div>
      <div id='basket info'>
        <h5 class="card-title">Общая стоимость:</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default BasketList;

import React from 'react';
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
  ]

  return (
    <div>
      {basket.map(item => <Basketcard key={item.id} orderItem={item} />)}
    </div>
  );
}

export default BasketList;

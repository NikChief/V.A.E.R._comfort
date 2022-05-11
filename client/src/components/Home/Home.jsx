import { auto } from '@popperjs/core';
import React from 'react';
import Carousel from '../Carousel/Carousel';

function Home(props) {
  return (
    <div style={{'display': 'flex', 'width': '100%', 'height': '60vh', 'justifyContent' : 'space-around', 'alignItems': 'center', }}>
      <p style={{'width': '400px', 'display' : 'flex', 'alignItems': 'center', 'fontStyle' : 'italic', 'fontSize' : 'large'}}>
      Шьем костюмы и не только по Вашим меркам. С любовью к делу и клиентам. У нас богатая палитра цветов и качественный материал. Наши изделия шьются быстро, а носятся долго и с удовольствием. 
      <br />Отправляем по всей России.
      </p>
      <Carousel/>
    </div>
  );
}

export default Home;

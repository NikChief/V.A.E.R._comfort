import React from 'react';
import Category from '../Category/Category';

const categories = [
  {
    name:'Костюмы',
    url:'https://sun9-17.userapi.com/s/v1/ig2/YXXIy-4jEn-xG26zXokIDItqcqD4lUxPnl662be6tLfWTX8bYiXMERx17WOekiHrTk8IkbK4gjyoSz4CyjAVmP9g.jpg?size=607x1080&quality=95&type=album',
    linkname:'costume'
  }, 
  {name:'Футболки', 
   url:'https://sun9-61.userapi.com/s/v1/ig2/gSj6Fw_sIPMYHlkSMUy-BSocoFYVDbEOee1__c9KSGr2RtYR1p-qjIebSKmaLedcX1m-pF2H1xprMcP64cfLu9cO.jpg?size=720x1080&quality=95&type=album',
   linkname:'t-shirt'
  }, 
  {name:'Платья', 
   url:'https://sun9-80.userapi.com/s/v1/ig2/yb2rIdMRQL0Pc-LtI2rI0UVtL6zYt8_DUQ8eYPKFPnUWqPM8G46wZOxBLEc9VWjAW_hLw01PLt5oQZkU2avNl3Ea.jpg?size=607x1080&quality=95&type=album',
   linkname:'gown'
  }, 
  {name:'Пижамы', 
   url:'https://sun9-87.userapi.com/s/v1/ig2/gCGIDyOQielf3Pb29NTltYkP7_47apCQ4qryK-uyVtWO7vS7vw4LWVNAhmdM5VMDNe_N-vUMjgt5NoO4BoD7LlKw.jpg?size=607x1080&quality=95&type=album',
   linkname:'sleepwear'
  }, 
];

function CategoryType(props) {
  return (
    <div className="m-1 d-flex justify-content-center">
      {categories.map(category => <Category key={category.name} category={category} />)}
    </div>
  );
}

export default CategoryType;

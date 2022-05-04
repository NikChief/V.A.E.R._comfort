import React from 'react';
import Type from '../Type/Type';
import style from './TypeList.module.css'

const types = [
  {
    name:'Для мужчин', 
    linkname:'men'
  }, 
  {name:'Для женщин', 
   linkname:'women'
  }, 
  {name:'Для детей', 
   linkname:'kids'
  }
];

function TypeList(props) {
  return (
    <div className={style.typeList}>
    {types.map(type => <Type key={type.name} type={type} />)}
    </div>
  );
}

export default TypeList;

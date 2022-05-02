import React from 'react';
import Type from '../Type/Type';
import style from './TypeList.module.css'

const types = [{name:'Для мужчин', url:'https://manrule.ru/images/article/orig/2020/03/stil-i-moda-dlya-muzhchin-posle-40-osobennosti-modnogo-garderoba-1.jpg'}, 
{name:'Для женщин', url:'https://magimoda.com/wp-content/uploads/2019/04/vesna-moda-40-let-4.jpg'}, 
{name:'Для детей', url:'https://lapland.su/media/k2/items/cache/542390225756f78888142d54f3d17e01_XL.jpg'}];

function TypeList(props) {
  return (
    <div className={style.typeList}>
    {types.map(type => <Type key={type.name} type={type} />)}
    </div>
  );
}

export default TypeList;

import React from 'react';
import style from './Type.module.css'
import { NavLink } from 'react-router-dom';

function Type({type}) {
  return (
    <>
      {/* <Link to={`/catalogue/${type.link_name}`} className="nav-item"> <h3> {type.name} </h3> </Link> */}
      <li className='nav-item'><NavLink to={`/catalogue/${type.link_name}`} className='nav-link'>{type.name}</NavLink></li>
    </>
  );
}

export default Type;

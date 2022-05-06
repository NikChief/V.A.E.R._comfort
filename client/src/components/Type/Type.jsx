import React from 'react';
import style from './Type.module.css'
import { Link } from 'react-router-dom';

function Type({type}) {
  return (
    <div className="m-2 d-flex justify-content-center">
      <Link to={`/catalogue/${type.link_name}`} className="nav-item"> <h3> {type.name} </h3> </Link>
    </div>
  );
}

export default Type;

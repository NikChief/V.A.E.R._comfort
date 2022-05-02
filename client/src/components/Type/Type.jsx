import React from 'react';
import style from './Type.module.css'

function Type({type}) {
  return (
    <div className="card" style={{"width": "20rem"}}>
    <img src={type.url} className={`card-img-top ${style.cardImg}`} alt="..."/>
    <div className="card-body d-flex justify-content-center">
      <a href="#" className="btn btn-primary"> {type.name} </a>
    </div>
    </div>
  );
}

export default Type;

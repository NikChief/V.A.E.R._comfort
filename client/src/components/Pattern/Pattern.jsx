import React from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Pattern.module.css'

function Pattrn({pattern}) {

  const params = useParams();
  
  return (
    <div className="card m-3" style={{"width": "20rem"}}>
      <img src={`http://localhost:4000/${pattern.image}`} className={`card-img-top ${style.cardImg}`} alt="..."/>
      <div className="card-body d-flex justify-content-center">
      <Link to={`/catalogue/${params.type}/${params.categoryType}/${pattern.name}`} className="btn btn-primary"> {pattern.name} </Link>
      </div>
    </div>
  );
}

export default Pattrn;

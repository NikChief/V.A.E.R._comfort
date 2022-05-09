import React from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Pattern.module.css'

function Pattrn({pattern}) {

  const params = useParams();
  
  return (
    <div className="card m-3" style={{"width": "20rem"}}>
      {/* <Link to={`/catalogue/${params.type}/${params.categoryType}/${pattern.id}`} className="btn btn-primary">перейти</Link> */}
      <Link to={`/catalogue/${params.type}/${params.categoryType}/${pattern.id}`} className="btn btn-primary" style={{'backgroundColor': "rgb(229,239,241)", 'border': "rgb(229,239,241)", 'color': 'rgb(35,37,37)'}}>
      <img src={`http://localhost:4000/${pattern.image}`} className={`card-img-top ${style.cardImg}`} alt="..."/>
      <div className="card-body d-flex justify-content-center">
        <div>{`Модель ${pattern.name}`}</div> &nbsp;
        <div>{`от ${pattern.Items.lower_price} руб`}</div>&nbsp;
      </div>
      </Link>
    </div>
  );
}

export default Pattrn;

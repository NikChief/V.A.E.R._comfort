import React from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Pattern.module.css'

function Pattrn({pattern}) {

  const params = useParams();
  
  return (
    <div className={`card m-3 ${style.container}`}>
      <Link to={`/catalogue/${params.type}/${params.categoryType}/${pattern.id}`} className={`btn btn-primary ${style.card}`}>
      <div className="card-body d-flex flex-column justify-content-space-between, align-items-center" >
        <div style={{'backgroundImage': `url(${process.env.REACT_APP_BASE_URL}/${pattern.image})`, 'height': '60vh', 'width' : '40vh', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center, center', 'backgroundSize': 'contain'}} ></div>
        <div className={style.description}>
          <div>{`Модель ${pattern.name}`}</div>
          <div className={style.price}>{`от ${pattern.Items.lower_price} руб`}</div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Pattrn;

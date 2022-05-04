import React from 'react'
import { Link, useParams } from 'react-router-dom';
import style from './Category.module.css'

function Category({category}) {

  const params = useParams();

  return (
    <div className="card" style={{"width": "20rem"}}>
      <img src={category.url} className={`card-img-top ${style.cardImg}`} alt="..."/>
      <div className="card-body d-flex justify-content-center">
      <Link to={`/catalogue/${params.type}/${category.linkname}`} className="btn btn-primary"> {category.name} </Link>
      </div>
    </div>
  );
}

export default Category;

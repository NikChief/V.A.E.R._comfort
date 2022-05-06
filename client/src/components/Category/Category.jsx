import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategoryTypeIdAC } from '../../redux/actionCreators/categoryTypeAC';
import style from './Category.module.css'

function Category({category}) {

  const params = useParams();
  const dispatch = useDispatch();

  function getCategoryTypeId() {
    dispatch(getCategoryTypeIdAC(category.id))
  }

  return (
    <div className="card" style={{"width": "20rem"}}>
      <img src={`http://localhost:4000/${category.image}`} className={`card-img-top ${style.cardImg}`} alt="..."/>
      <div className="card-body d-flex justify-content-center">
      <Link to={`/catalogue/${params.type}/${category.Category.link_name}`} 
            onClick={getCategoryTypeId} 
            className="btn btn-primary"> {category.Category.name} </Link>
      </div>
    </div>
  );
}

export default Category;

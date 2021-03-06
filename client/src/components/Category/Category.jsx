import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategoryTypeIdAC } from '../../redux/actionCreators/categoryTypeAC';
import style from './Category.module.css'

function Category({category}) {

  const params = useParams();
  const dispatch = useDispatch();

  function getCategoryTypeId() {
    localStorage.setItem('category_type_id', category.id);
    dispatch(getCategoryTypeIdAC(category.id))
  }

  return (
    <div className="card" style={{"width": "23rem"}}>
      <Link to={`/catalogue/${params.type}/${category.Category.link_name}`} 
            onClick={getCategoryTypeId} 
            className={`btn m-3 ${style.choiceButton}`}> 
            <img src={`${process.env.REACT_APP_BASE_URL}/${category.image}`} className={`card-img-top ${style.cardImg}`} alt="..."/>
            <div className="card-body d-flex justify-content-center">
            {category.Category.name} 
            </div>
      </Link>
    </div>
  );
}

export default Category;

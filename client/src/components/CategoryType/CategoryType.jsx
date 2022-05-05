import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInitCategoryTypesAC } from '../../redux/actionCreators/categoryTypeAC';
import Category from '../Category/Category';

function CategoryType(props) {
  
  const params = useParams();
  const dispatch = useDispatch();
  const {categoryTypes} = useSelector(state => state.categoryTypesState);
  console.log(categoryTypes)

  useEffect(() => {
    dispatch(fetchInitCategoryTypesAC(params.type))
  }, [dispatch, params])

  return (
    <div className="m-1 d-flex justify-content-center">
      {categoryTypes?.map(category => <Category key={category.id} category={category} />)}
    </div>
  );
}

export default CategoryType;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearCategoryTypesAC, fetchInitCategoryTypesAC } from '../../redux/actionCreators/categoryTypeAC';
import Category from '../Category/Category';

function CategoryType(props) {
  
  const params = useParams();
  const dispatch = useDispatch();
  const {categoryTypes} = useSelector(state => state.categoryTypesState);

  useEffect(() => {
    dispatch(fetchInitCategoryTypesAC(params.type))
    return () => dispatch(clearCategoryTypesAC())
  }, [dispatch, params])

  return (
    <div className="m-3 d-flex justify-content-center">
      {categoryTypes?.map(category => <Category key={category.id} category={category} />)}
    </div>
  );
}

export default CategoryType;

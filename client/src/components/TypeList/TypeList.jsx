import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Type from '../Type/Type';
import { fetchInitTypesAC } from '../../redux/actionCreators/typesAC'
import style from './TypeList.module.css'

function TypeList(props) {

  const dispatch = useDispatch();
  const { types } = useSelector(state => state.typesState);

  useEffect(() => {
    dispatch(fetchInitTypesAC())
  }, [dispatch])

  return (
      <ul className={`navbar-nav ${style.typeList}`}>
        {types && types.map(type => <Type key={type.id} type={type} />)}
      </ul>
  );
}

export default TypeList;

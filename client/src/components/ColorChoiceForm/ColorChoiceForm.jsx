import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchInitColorsAC } from '../../redux/actionCreators/colorsAC';
import styles from './ColorChoiceForm.module.css'

function ColorChoiceForm(props) {

  const dispatch = useDispatch()

  const { colors } = useSelector(state => state.colorsState);

  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])
  
  return (
    <div>
      <select className="form-select" id='color_id'>
        <option selected>Выберите цвет</option>
        <option value="1">красный</option>
        <option value="2">белый</option>
        <option value="3">желтый</option>
      </select>
    </div>
  );
}

export default ColorChoiceForm;

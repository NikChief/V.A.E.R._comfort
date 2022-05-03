import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchInitColorsAC } from '../../redux/actionCreators/colorAC';
import styles from './ColorChoiceForm.module.css'

function ColorChoiceForm(props) {

  const dispatch = useDispatch()

  const { colors } = useSelector(state => state.colorsState);

  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])
  
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Выбрать цвет</option>
        {colors.map(color => <option value={color.name}><img src={color.image} alt='colorImg'></img></option>)}
      </select>
    </div>
  );
}

export default ColorChoiceForm;

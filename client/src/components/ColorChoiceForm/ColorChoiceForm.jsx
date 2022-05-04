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
      colors
    </div>
  );
}

export default ColorChoiceForm;

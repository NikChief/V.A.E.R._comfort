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
      <form action="handler.php">
        <p>Укажите цвет фона: 
          {/* <input type="color" name="bg" value="#ff0000"></input> */}
          <select>
            <option className={styles.background}>
              {/* <div className={styles.background} alt="Submit"></div> */}
            </option>
          </select>
          {/* <input type="submit" value="Выбрать"></input> */}

        </p>
      </form>
    </div>
  );
}

export default ColorChoiceForm;

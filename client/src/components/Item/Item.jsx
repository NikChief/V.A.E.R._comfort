import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchInitCurrentItemAC } from '../../redux/actionCreators/itemAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
import MaterialChoiceForm from '../MaterialChoiceForm/MaterialChoiceForm';
import styles from './Item.module.css'

function Item(props) {

  // const { patternId } = useParams()
  //например, путь women/costumes/1001

  const patternId = 1001;
  const { currentItem } = useSelector(state => state.itemState);
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchInitCurrentItemAC(patternId))
      // отправляем в state, {id: 1001, name: 'Костюм такой-то', image: 'https://...', category_type_id: 1, color_count: 3}
  }, [dispatch, patternId])

  // const getSize = (e) => {
  //   e.preventDefault();
  //   const body = {

  //   }
  // }

  return (
    <div className={styles.itemContainer}>
      <div id='patternInfo' className={styles.patternInfoContainer}>
        <h5 className='card-title'>Модель:</h5>
        <p className='card-text'>{currentItem.name}</p>
        <img src={currentItem.image} className={`card-img-top ${styles.patternPicture}`} alt='patternImage'></img>  
      </div>
      <div id='inputFromClientFormBlock'>
        <form id='inputFromClientForm' className={styles.itemFormContainer}> 
        <div className={styles.colorsChoiceForm}>
          <div id='colorsChoiceForm'>
              <h5 className='card-title'>Выберите цвета:</h5>
              {(currentItem.color_count === 3)
              ?
              <>
                <ColorChoiceForm/>
                <ColorChoiceForm/>
                <ColorChoiceForm/>
              </>
              :
              (currentItem.color_count === 1) 
              ?
                <ColorChoiceForm/>
              :
              <></>
              }
            </div>
            <div id='materialChoiceForm' className={styles.materialChoiceFormContainer}>
            <h5 className='card-title'>Выберите материал:</h5>
              <MaterialChoiceForm />
            </div>
          </div>
          <div id='sizeForm' className={styles.sizeForm}>
            <h5>Укажите размеры:</h5>
            {(currentItem.size_type_id === 1 || currentItem.size_type_id === 2)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className='form-label'>Базовый размер</label>
              <select class='form-select' id='base_size'>
                <option selected>Выбери базовый размер</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
              </select>
            </div>
            }
            {(currentItem.size_type_id === 1)
            &&
            <>
            <div className='mb-3'>
              <label htmlFor='bust' className='form-label'>Обхват груди</label>
              <input type='text' className='form-control' id='bust'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='hip_girth' className='form-label'>Обхват бедер</label>
              <input type='text' className='form-control' id='hip_girth'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='waistline' className='form-label'>Обхват талии</label>
              <input type='text' className='form-control' id='waistline'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='pants_length-inseam' className='form-label'>Длина брюк по внутреннему шву</label>
              <input type='text' className='form-control' id='pants_length-inseam'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='groin_to_bone' className='form-label'>Длина от мотни до косточки на ноге</label>
              <input type='text' className='form-control' id='groin_to_bone'></input>
            </div>
            </>
            }
            {(currentItem.size_type_id === 3)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className='form-label'>Рост ребенка</label>
              <select class='form-select' id='base_size'>
                <option selected>Выбери рост</option>
                <option value='110'>110</option>
                <option value='120'>120</option>
                <option value='130'>130</option>
              </select>
            </div>
            }
            <button type='submit' className='btn btn-primary'>Добавить в корзину</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Item;

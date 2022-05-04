import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchInitCurrentItemAC, initCurrentItemAC } from '../../redux/actionCreators/itemAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
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

  // useEffect(() => {
  //   fetch('/colors')
  //     .then(res => res.json())
  //     .then(data => dispatch(initCurrentItemAC(data)))
  // }, [dispatch, currentItem])


  return (
    <div className={styles.itemContainer}>
      <div id='patternInfo' className={styles.patternInfoContainer}>
        <h5 className="card-title">Модель:</h5>
        <p className="card-text">{currentItem.name}</p>
        <img src={currentItem.image} className={`card-img-top ${styles.patternPicture}`} alt="patternImage"></img>  
      </div>
      <div id='inputFromClientFormBlock'>
        <form id='inputFromClientForm' className={styles.itemFormContainer}> 
          <div id='colorsChoiceForm' className={styles.colorsChoiceForm}>
            <h5 className="card-title">Выберите цвета:</h5>
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
          <div id='sizeForm' className={styles.sizeForm}>
              <h5>Укажите размеры:</h5>
              <div className="mb-3">
                <label htmlFor="base_size" className="form-label">Базовый размер</label>
                <input type="text" className="form-control" id="base_size"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="bust" className="form-label">Обхват груди</label>
                <input type="text" className="form-control" id="bust"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="hip_girth" className="form-label">Обхват бедер</label>
                <input type="text" className="form-control" id="hip_girth"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="waistline" className="form-label">Обхват талии</label>
                <input type="text" className="form-control" id="waistline"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pants_length-inseam" className="form-label">Длина брюк по внутреннему шву</label>
                <input type="text" className="form-control" id="pants_length-inseam"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="groin_to_bone" className="form-label">Длина от мотни до косточки на ноге</label>
                <input type="text" className="form-control" id="groin_to_bone"></input>
              </div>
          <button type="submit" className="btn btn-primary">Добавить в корзину</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Item;

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { initCurrentItemAC } from '../../redux/actionCreators/itemAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
import styles from './Item.module.css'

function BasketItem(props) {

  // const { patternId } = useParams()
  //например, путь women/costumes/1001

  const patternId = 1001;
  const { currentItem } = useSelector(state => state.itemState);
  const dispatch = useDispatch();

  

  useEffect(() => {
    fetch(`/patterns/${patternId}`)
      .then(res => res.json())
      .then(data => dispatch(initCurrentItemAC(data)))
  }, [dispatch])

  useEffect(() => {
    fetch(`/colors/${patternId}`)
      .then(res => res.json())
      .then(data => dispatch(initCurrentItemAC(data)))
  }, [currentItem])


  return (
    <div>
      <div>
        <div>
          <div>
            <h5 className="card-title">Модель:</h5>
            <p className="card-text">{currentItem.name}</p>
            <img src={currentItem.image} className={`card-img-top ${styles.patternPicture}`} alt="..."></img>  
          </div>
          <div>
            <div>
              <h5 className="card-title">Цвета:</h5>
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
          </div>
          {/* <div>
          <button type="button" class="btn btn-primary btn-sm">Добавить в корзину</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToBasketAC, fetchItemsInfoAC, getItemsInfoAC } from '../../redux/actionCreators/basketAC';
// import { useParams } from 'react-router-dom';
import { fetchInitCurrentItemAC } from '../../redux/actionCreators/itemAC';
import { fetchInitColorsAC } from '../../redux/actionCreators/colorsAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
import MaterialChoiceForm from '../MaterialChoiceForm/MaterialChoiceForm';
import styles from './Item.module.css'

function Item(props) {

  // const { patternId } = useParams()
  //например, путь women/costumes/1001

  const patternId = 1001;
  const { currentItem } = useSelector(state => state.itemState);
  const { basket } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  console.log('itemsInfoFromDb', itemsInfoFromDb)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchInitCurrentItemAC(patternId))
      // отправляем в state, {id: 1001, name: 'Костюм такой-то', image: 'https://...', category_type_id: 1, color_count: 3}
  }, [dispatch, patternId])

  
  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])

  const getInput = (e) => {
    e.preventDefault();
    const body = {
      pattern_id: patternId,
      pattern_name: currentItem.name,
      patter_image: currentItem.image,
      base_size: e.target.base_size.value,
      bust: e.target.bust.value,
      hip_girth: e.target.hip_girth.value,
      waistline: e.target.waistline.value,
      pants_length_inseam: e.target.pants_length_inseam.value,
      groin_to_bone: e.target.groin_to_bone.value,
      main_color_id: e.target.bust.value,
      extra_color1_id: e.target.bust.value,
      extra_color2_id: e.target.bust.value,
      material_id: e.target.material_id.value,
      count: e.target.count.value,
    }
    console.log('body', body)
    dispatch(addItemToBasketAC(body));
  }

  useEffect(() => {
    for (let item of basket) {
      // fetch(`/items/${item.pattern_id}/${item.material_id}`)
      //   .then(res=>res.json())
      //   .then(data=>dispatch(getItemsInfoAC(data)))
      dispatch(fetchItemsInfoAC({ patternId: item.pattern_id, materialId: item.material_id }))
    }
  }, [basket, dispatch])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify({basket, itemsInfoFromDb}));
    // localStorage.setItem('basket', JSON.stringify(basket));
    // localStorage.setItem('itemsInfoFromDb', JSON.stringify(itemsInfoFromDb));
    // console.log('hi')
  }, [basket, itemsInfoFromDb]);

  return (
    <div className={styles.itemContainer}>
      <div id='patternInfo' className={styles.patternInfoContainer}>
        <h5 className='card-title'>Модель:</h5>
        <p className='card-text'>{currentItem.name}</p>
        <img src={currentItem.image} className={`card-img-top ${styles.patternPicture}`} alt='patternImage'></img>  
      </div>
      <div id='inputFromClientFormBlock'>
        <form id='inputFromClientForm' className={styles.itemFormContainer} onSubmit={getInput}> 
        <div className={styles.colorsChoiceForm}>
          <div id='colorsChoiceForm'>
              <h5 className='card-title'>Выберите цвета:</h5>
              {(currentItem.color_count === 3)
              ?
              <>
              <ColorChoiceForm colorType={'основной цвет'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
              <ColorChoiceForm colorType={'дополнительный цвет'} actionType={'PIC_EXTRA1'} stateName={'colorChosenExtra1'} />
              <ColorChoiceForm colorType={'дополнительный цвет 2'} actionType={'PIC_EXTRA2'} stateName={'colorChosenExtra2'} />
              </>
            :
            (currentItem.color_count === 2) 
            ?
            <>
              <ColorChoiceForm colorType={'основной цвет'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
              <ColorChoiceForm colorType={'дополнительный цвет'} actionType={'PIC_EXTRA1'} stateName={'colorChosenExtra1'} />
            </>
            :
            <ColorChoiceForm colorType={'основной цвет'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
          }
            </div>
            <div id='materialChoiceForm' className={styles.materialChoiceFormContainer}>
            <h5 className='card-title'>Выберите материал:</h5>
              <MaterialChoiceForm />
            </div>
            <div id='countForm' className={styles.materialChoiceFormContainer}>
              <label htmlFor='count' className='form-label'>Количество</label>
              <select required className='form-select' id='count'>
                <option selected value=''>Выбери количество</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>
          </div>
          <div id='sizeForm' className={styles.sizeForm}>
            <h5>Укажите размеры:</h5>
            {(currentItem.size_type_id === 1 || currentItem.size_type_id === 2)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className='form-label'>Базовый размер</label>
              <select required className='form-select' id='base_size'>
                <option selected value=''>Выбери базовый размер</option>
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
              <input required type='text' className='form-control' id='bust'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='hip_girth' className='form-label'>Обхват бедер</label>
              <input required type='text' className='form-control' id='hip_girth'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='waistline' className='form-label'>Обхват талии</label>
              <input required type='text' className='form-control' id='waistline'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='pants_length_inseam' className='form-label'>Длина брюк по внутреннему шву</label>
              <input required type='text' className='form-control' id='pants_length_inseam'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='groin_to_bone' className='form-label'>Длина от мотни до косточки на ноге</label>
              <input required type='text' className='form-control' id='groin_to_bone'></input>
            </div>
            </>

            }
            {(currentItem.size_type_id === 3)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className='form-label'>Рост ребенка</label>
              <select required className='form-select' id='base_size'>
                <option selected value=''>Выбери рост</option>
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

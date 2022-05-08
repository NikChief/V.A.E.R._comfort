import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToBasketAC, fetchItemsInfoAC } from '../../redux/actionCreators/basketAC';
import { useParams } from 'react-router-dom';
import { clearCurrentItemAC, fetchInitCurrentItemAC, initCurrentItemAmountAC, initCurrentItemCountAC } from '../../redux/actionCreators/itemAC';
import { clearChosenColorsAC, fetchInitColorsAC } from '../../redux/actionCreators/colorsAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
import MaterialChoiceForm from '../MaterialChoiceForm/MaterialChoiceForm';
import styles from './Item.module.css';
import { v4 as uuidv4 } from 'uuid';

function Item(props) {

  const { patternId } = useParams()

  const { currentItem, currentItemPrice, currentItemCount, currentItemAmount } = useSelector(state => state.itemState);
  const { basketItems } = useSelector(state => state.basketState);
  const { itemsInfoFromDb } = useSelector(state => state.basketState);
  const { colorChosenMain, colorChosenExtra1, colorChosenExtra2 } = useSelector(state => state.colorsState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchInitCurrentItemAC(patternId))
    return () => {
      dispatch(clearChosenColorsAC())
    }
  }, [dispatch, patternId])

  const getCount = (e) => {
    const count = e.target.value;
    dispatch(initCurrentItemCountAC(count))
  }

  useEffect(() => {
    dispatch(initCurrentItemAmountAC( { currentItemPrice, currentItemCount }))

  }, [dispatch, currentItemPrice, currentItemCount])

  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify({basketItems, itemsInfoFromDb}));
  }, [basketItems, itemsInfoFromDb]);

  useEffect(() => {
    return () => {
      dispatch(clearCurrentItemAC())
    }
  }, [dispatch])

  const getInput = (e) => {
    e.preventDefault();
    const body = {
      id: uuidv4(),
      pattern_id: patternId,
      pattern_name: currentItem.name,
      pattern_image: currentItem.image,
      base_size: e.target.base_size.value,
      bust: e.target.bust?.value,
      hip_girth: e.target.hip_girth?.value,
      waistline: e.target.waistline?.value,
      pants_length_inseam: e.target.pants_length_inseam?.value,
      groin_to_bone: e.target.groin_to_bone?.value,
      main_color_id: colorChosenMain,
      extra_color1_id: colorChosenExtra1,
      extra_color2_id: colorChosenExtra2,
      material_id: JSON.parse(e.target.material.value).id,
      material_type: JSON.parse(e.target.material.value).type,
      count: e.target.count.value,
    }
   
    dispatch(addItemToBasketAC(body));
    dispatch(fetchItemsInfoAC({ basketId: body.id, patternId: body.pattern_id, materialId: body.material_id })) 
    // надо стереть current item в конце
    dispatch(clearCurrentItemAC());
    alert('Товар добавлен в корзину.')
    navigate('/')
  }

  return (
    <div className={styles.itemContainer}>
      <div id='patternInfo' className={styles.patternInfoContainer}>
        <h5 className='card-title'>Модель:</h5>
        <p className='card-text'>{currentItem.name}</p>
        <img src={`http://localhost:4000/${currentItem.image}`} className={`card-img-top ${styles.patternPicture}`} alt='patternImage'></img>  
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
              <MaterialChoiceForm patternId={patternId} />
            </div>
            <div id='countForm' className={styles.materialChoiceFormContainer}>
              <label htmlFor='count' className='form-label'>Количество</label>
              <select onChange={getCount} required className='form-select' id='count'>
                <option selected disabled value=''>Выбери количество</option>
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
            <div className={styles.materialChoiceFormContainer}>
              <h5 className='card-title'>Описание модели:</h5>
              <p className='card-text'>{currentItem.description}</p>
              {/* стили css поправить */}
            </div>
            <div className={styles.materialChoiceFormContainer}>
              <h5 className='card-title'>Стоимость:</h5>
              {
              (currentItemAmount !== '')
              &&
              <p className='card-text'>{currentItemAmount + ' руб.'}</p>
              }
            </div>
          </div>
          <div id='sizeForm' className={styles.sizeForm}>
            <h5>Укажите размеры*:</h5>
            {(currentItem.size_type_id === 1)
            &&
            <>
                       
            <div className='mb-3'>
              <label htmlFor='bust' className='form-label'>Обхват груди, см</label>
              <input required type='text' className='form-control' id='bust' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='hip_girth' className='form-label'>Обхват бедер, см</label>
              <input required type='text' className='form-control' id='hip_girth' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='waistline' className='form-label'>Обхват талии, см</label>
              <input required type='text' className='form-control' id='waistline' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='pants_length_inseam' className='form-label'>Длина брюк по внутреннему шву, см</label>
              <input required type='text' className='form-control' id='pants_length_inseam' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='groin_to_bone' className='form-label'>Длина от мотни до косточки на ноге, см</label>
              <input required type='text' className='form-control' id='groin_to_bone' autoComplete='off'></input>
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
            {(currentItem.size_type_id === 1 || currentItem.size_type_id === 2)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className='form-label'>Размер (для костюмов данная информация справочно)</label>
              <select required className='form-select' id='base_size'>
                <option selected disabled value=''>Выбери размер</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
              <p>* на большие размеры цена может быть увеличена</p>
            </div>
            }
            <div>
            <p className={styles.sizeInstructionColor} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Инструкция по размерам
            </p>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Инструкция по размерам</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p className={styles.sizeInstructionText}>При измерениях стойте ровно, выпрямив спину. Попросите кого-нибудь измерить вас, показания будут более точными. Сантиметровая лента должна плотно прилегать к телу, причем измерения лучше проводить, находясь в нижнем белье.</p> 
                    <h6>Обхват груди</h6>
                    <p className={styles.sizeInstructionText}>Сантиметровая лента проходит вокруг туловища через выступающие точки груди и нижнюю часть лопаток. При этом метр не нужно сильно стягивать на груди. Измерение делайте на выдохе. Зная свой обхват груди, легко определить свой российский размер - необходимо поделить объем пополам (если ОГ-100см, 100:2=50, значит 50- Ваш российский размер).</p>
                    <h6>Обхват талии</h6>
                    <p className={styles.sizeInstructionText}>Сантиметровая лента замыкается вокруг самой узкой части талии. Убедитесь , что лента расположена горизонтально. Живот втягивать не нужно, придерживайтесь своего обычного положения.</p>
                    <h6>Обхват бедер</h6>
                    <p className={styles.sizeInstructionText}>При измерении бедер расположите сантиметровую ленту горизонтально, стараясь охватить наиболее выступающие точки. Лента не должна быть слишком натянута или наоборот, ослаблена.</p>
                    <h6>Стандартные размеры (XS, S, M, L, XL)</h6>
                    <p className={styles.sizeInstructionText}>Уважаемые покупатели, в таблицах указаны всего лишь усредненные показатели! Размеры одежды на сайте соответствуют российским размерам, поэтому заказывайте именно те размеры, которые Вы сегодня реально носите!</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div>
              <button type='submit' className='btn btn-primary'>Добавить в корзину</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Item;

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToBasketAC, fetchItemsInfoAC } from '../../redux/actionCreators/basketAC';
import { useParams, Link } from 'react-router-dom';
import { clearCurrentItemAC, fetchInitCurrentItemAC, initCurrentItemAmountAC, initCurrentItemCountAC } from '../../redux/actionCreators/itemAC';
import { clearChosenColorsAC, fetchInitColorsAC } from '../../redux/actionCreators/colorsAC';
import ColorChoiceForm from '../ColorChoiceForm/ColorChoiceForm';
import MaterialChoiceForm from '../MaterialChoiceForm/MaterialChoiceForm';
import styles from './Item.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useCallback } from 'react';
import { Modal } from 'bootstrap'

function Item(props) {

  const { patternId } = useParams()

  const { currentItem, currentItemPrice, currentItemCount, currentItemAmount } = useSelector(state => state.itemState);
  const { colorChosenMain, colorChosenExtra1, colorChosenExtra2 } = useSelector(state => state.colorsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitCurrentItemAC(patternId))
    return () => {
      dispatch(clearChosenColorsAC())
    }
  }, [dispatch, patternId])

  const getCount = useCallback((e) => {
    const count = e.target.value;
    dispatch(initCurrentItemCountAC(count))
  }, [dispatch])

  useEffect(() => {
    dispatch(initCurrentItemAmountAC( { currentItemPrice, currentItemCount }))

  }, [dispatch, currentItemPrice, currentItemCount])

  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])

  useEffect(() => {
    dispatch(clearCurrentItemAC())
  }, [dispatch])

  const getInput = useCallback((e) => {
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
      main_color_id: colorChosenMain.id,
      extra_color1_id: colorChosenExtra1.id,
      extra_color2_id: colorChosenExtra2.id,
      main_color_image: colorChosenMain.image,
      extra_color1_image: colorChosenExtra1.image,
      extra_color2_image: colorChosenExtra2.image,
      material_id: JSON.parse(e.target.material.value).id,
      material_type: JSON.parse(e.target.material.value).type,
      count: e.target.count.value,
      comment: e.target.comment.value,
    }

    dispatch(addItemToBasketAC(body));
    dispatch(fetchItemsInfoAC({ basketId: body.id, patternId: body.pattern_id, materialId: body.material_id })); 
    const modal = new Modal(document.querySelector('#message'));
    modal.show();
  }, [dispatch, colorChosenExtra1, colorChosenExtra2, colorChosenMain, currentItem.image, currentItem.name, patternId])

  return (
    <div className={styles.itemContainer}>
      <div id='patternInfo' className={styles.patternInfoContainer}>
        <div className={styles.modelTitle}>
          <h5 className='card-title'>????????????:</h5>
          <p className='card-text'>{currentItem.name}</p>
        </div>
        <div className={styles.patternPictureBox}>
          <img src={`${process.env.REACT_APP_BASE_URL}/${currentItem.image}`} className={`card-img-top ${styles.patternPicture}`} alt='patternImage'></img>  
        </div>
      </div>
      <div id='inputFromClientFormBlock'>
        <form id='inputFromClientForm' className={styles.itemFormContainer} onSubmit={getInput}> 
        <div className={styles.leftInputContainer}>
          <div id='colorsChoiceForm' className={styles.colorsChoiceForm}>
            <h6 className='card-title'>???????????????? ??????????:</h6>
            {(currentItem.color_count === 3)
            ?
            <>
            <ColorChoiceForm colorType={'???????????????? ????????'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
            <ColorChoiceForm colorType={'???????????????????????????? ????????'} actionType={'PIC_EXTRA1'} stateName={'colorChosenExtra1'} />
            <ColorChoiceForm colorType={'???????????????????????????? ???????? 2'} actionType={'PIC_EXTRA2'} stateName={'colorChosenExtra2'} />
            <p className={styles.comment}>* ?????????? ???????????????? ??????????????????????, ?????? ?????????????????????? ???? ????????????????</p>
            </>
            :
            (currentItem.color_count === 2) 
            ?
            <>
              <ColorChoiceForm colorType={'???????????????? ????????'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
              <ColorChoiceForm colorType={'???????????????????????????? ????????'} actionType={'PIC_EXTRA1'} stateName={'colorChosenExtra1'} />
            </>
            :
            <ColorChoiceForm colorType={'???????????????? ????????'} actionType={'PIC_MAIN'} stateName={'colorChosenMain'} />
            }
          </div>
          <div id='materialChoiceForm' className={styles.choiceInnerForm}>
            <h6 className='card-title'>???????????????? ????????????????:</h6>
              <MaterialChoiceForm patternId={patternId} />
          </div>
          <div id='countForm' className={styles.choiceInnerForm}>
            <label htmlFor='count' className={styles.labelStyle}><h6>????????????????????</h6></label>
            <select onChange={getCount} required className={`${styles.inputStyle} ${styles.textStyle} form-select`} id='count'>
              <option selected disabled value=''>???????????? ????????????????????</option>
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
          <div className={styles.choiceInnerForm}>
            <h6 className='card-title'>???????????????? ????????????:</h6>
            <p className={styles.patternDescriptionText}>{currentItem.description}</p>
          </div>
          <div className={styles.choiceInnerForm}>
            <h6 className='card-title'>??????????????????:</h6>
            {
            (currentItemAmount !== '')
            &&
            <p className='card-text'>{currentItemAmount + ' ??????.'}</p>
            }
          </div>
          <div className={styles.choiceInnerForm}>
            <label for="comment" className={styles.labelStyle}><h6>??????????????????????:</h6></label>
            <textarea class="form-control" id="comment" rows="1"></textarea>
          </div>
        </div>
        <div id='sizeForm' className={styles.rightInputContainer}>
            <h5>?????????????? ??????????????*:</h5>
            {(currentItem.size_type_id === 1)
            &&
            <>
                       
            <div className='mb-3'>
              <label htmlFor='bust' className={styles.labelStyle}><h6>???????????? ??????????, ????</h6></label>
              <input className={`${styles.inputStyle} form-control`} required type='number' id='bust' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='hip_girth' className={styles.labelStyle}><h6>???????????? ??????????, ????</h6></label>
              <input className={`${styles.inputStyle} form-control`} required type='number' id='hip_girth' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='waistline' className={styles.labelStyle}><h6>???????????? ??????????, ????</h6></label>
              <input className={`${styles.inputStyle} form-control`} required type='number' id='waistline' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='pants_length_inseam' className={styles.labelStyle}><h6>?????????? ???????? ???? ?????????????????????? ??????, ????</h6></label>
              <input className={`${styles.inputStyle} form-control`} required type='number' id='pants_length_inseam' autoComplete='off'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='groin_to_bone' className={styles.labelStyle}><h6>?????????? ???? ?????????? ???? ???????????????? ???? ????????, ????</h6></label>
              <input className={`${styles.inputStyle} form-control`} required type='number' id='groin_to_bone' autoComplete='off'></input>
            </div>
            </>

            }
            {(currentItem.size_type_id === 3)
            &&
            <div className='mb-3'>
              <label htmlFor='base_size' className={styles.labelStyle}>???????? ??????????????</label>
              <select required className='form-select' id='base_size'>
                <option selected value=''>???????????? ????????</option>
                <option value='110'>110</option>
                <option value='120'>120</option>
                <option value='130'>130</option>
              </select>
            </div>
            }
            {(currentItem.size_type_id === 1 || currentItem.size_type_id === 2)
            &&
            <div>
              <label htmlFor='base_size' className={styles.labelStyle}><h6>???????????? (?????? ???????????????? ???????????? ???????????????????? ??????????????????)</h6></label>
              <select required className={`${styles.inputStyle} ${styles.textStyle} form-select`} id='base_size'>
                <option selected disabled value=''><span>???????????? ????????????</span></option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
              <p className={styles.comment}>* ???? ?????????????? ?????????????? ???????? ?????????? ???????? ??????????????????</p>
            </div>
            }
            <div className={styles.sizeInstructionColorDiv}>
            <p className={styles.sizeInstructionColor} data-bs-toggle="modal" data-bs-target="#exampleModal">
              ???????????????????? ???? ???????????? ??????????
            </p>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <p className="modal-title" id="exampleModalLabel">???????????????????? ???? ???????????? ??????????</p>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p className={styles.sizeInstructionText}>?????? ???????????????????? ???????????? ??????????, ???????????????? ??????????. ?????????????????? ????????-???????????? ???????????????? ??????, ?????????????????? ?????????? ?????????? ??????????????. ?????????????????????????? ?????????? ???????????? ???????????? ?????????????????? ?? ????????, ???????????? ?????????????????? ?????????? ??????????????????, ???????????????? ?? ???????????? ??????????.</p> 
                    <h6>???????????? ??????????</h6>
                    <p className={styles.sizeInstructionText}>?????????????????????????? ?????????? ???????????????? ???????????? ???????????????? ?????????? ?????????????????????? ?????????? ?????????? ?? ???????????? ?????????? ??????????????. ?????? ???????? ???????? ???? ?????????? ???????????? ?????????????????? ???? ??????????. ?????????????????? ?????????????? ???? ????????????. ???????? ???????? ???????????? ??????????, ?????????? ???????????????????? ???????? ???????????????????? ???????????? - ???????????????????? ???????????????? ?????????? ?????????????? (???????? ????-100????, 100:2=50, ???????????? 50- ?????? ???????????????????? ????????????).</p>
                    <h6>???????????? ??????????</h6>
                    <p className={styles.sizeInstructionText}>?????????????????????????? ?????????? ???????????????????? ???????????? ?????????? ?????????? ?????????? ??????????. ?????????????????? , ?????? ?????????? ?????????????????????? ??????????????????????????. ?????????? ?????????????????? ???? ??????????, ?????????????????????????????? ???????????? ???????????????? ??????????????????.</p>
                    <h6>???????????? ??????????</h6>
                    <p className={styles.sizeInstructionText}>?????? ?????????????????? ?????????? ?????????????????????? ?????????????????????????? ?????????? ??????????????????????????, ???????????????? ???????????????? ???????????????? ?????????????????????? ??????????. ?????????? ???? ???????????? ???????? ?????????????? ???????????????? ?????? ????????????????, ??????????????????.</p>
                    <h6>?????????????????????? ?????????????? (XS, S, M, L, XL)</h6>
                    <p className={styles.sizeInstructionText}>?????????????????? ????????????????????, ?? ???????????????? ?????????????? ?????????? ???????? ?????????????????????? ????????????????????! ?????????????? ???????????? ???? ?????????? ?????????????????????????? ???????????????????? ????????????????, ?????????????? ?????????????????????? ???????????? ???? ??????????????, ?????????????? ???? ?????????????? ?????????????? ????????????!</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">??????????????</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className={`${styles.buttonBox} d-grid gap-2`}>
              <button type='submit' className={`btn btn-bg ${styles.addToBasketButton}`}>???????????????? ?? ??????????????</button>
            </div>
        </div>
        </form>
      </div>
     
      {/* <!-- Modal --> */}
      <div class="modal fade" id="message" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h5 class="modal-body d-flex justify-content-center">
              ?????????? ???????????????? ?? ??????????????
            </h5>
            <div class="modal-footer">
              <Link to='/basket'><button type="button" class={`btn btn-sm ${styles.addToBasketConfirmButton}`} data-bs-dismiss="modal">?????????????? ?? ??????????????</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

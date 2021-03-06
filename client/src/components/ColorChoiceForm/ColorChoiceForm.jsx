import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Color from '../Color/Color';
import style from './ColorChoiceForm.module.css'


function ColorChoiceForm({colorType, stateName, actionType}) {

  const dispatch = useDispatch()
  const idModal = colorType.split(' ').join('')
  const state = useSelector(state => state.colorsState);
  const { colors } = state;
  const currentColor = state[stateName];

  function changeHandler(event) {
    const newColor = colors.find(el => el.name === event.target.value);
    dispatch({type: actionType, payload: newColor})
  }

  
  return (
    <div>
      <div className={style.choiceForm}>
        <button type="button" className={`btn m-3 ${style.choiceButton}`} data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
          {colorType}
        </button>
        <img src={`${process.env.REACT_APP_BASE_URL}/${currentColor.image}`} className={style.colorChosenImage} alt='...' />
      </div>
      
      <div className="modal fade" id={`${idModal}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <form onChange={changeHandler} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Выберите цвет</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex flex-wrap'>
                {colors.map(color => <Color color={color} key={colors.id}/>)}
              </div>
            </div>
            <div className="modal-footer">
               <button type="button" className={`btn ${style.choiseButton}`} data-bs-dismiss="modal">Ок</button>
            </div>
          </form> 
        </div>
      </div>
      
    </div>
  );
}

export default ColorChoiceForm;

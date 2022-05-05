import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Color from '../Color/Color';
import style from './ColorChoiceForm.module.css'


function ColorChoiceForm({colorType, stateName, actionType}) {

  const dispatch = useDispatch()
  console.log('STATENAME', stateName);
  const idModal = colorType.split(' ').join('')
  const state = useSelector(state => state.colorsState);
  const { colors } = state;
  const currentColor = state[stateName];


  // const [currentColor, setCurrentColor] = useState({id: null, image: 'pngwing.com.png'})

  const hardCodeColors = [
    {
      name: 'бежевый',
      image: '/hardCodeColors/bej.png',
      code: '0001',
    },
    {
      name: 'корал',
      image: '/hardCodeColors/coral.png',
      code: '0002',
    },
    {
      name: 'экрю',
      image: '/hardCodeColors/ecru.png',
      code: '0003',
    },
    {
      name: 'фиолетовый',
      image: '/hardCodeColors/fiolet.png',
      code: '0004',
    },
    {
      name: 'хакки',
      image: '/hardCodeColors/hakki.png',
      code: '0005',
    },
    {
      name: 'жёлтый',
      image: '/hardCodeColors/jeltiy.png',
      code: '0006',
    },
    {
      name: 'малина',
      image: '/hardCodeColors/malina.png',
      code: '0007',
    },
    {
      name: 'сирень',
      image: '/hardCodeColors/siren.png',
      code: '0008',
    },
  ]

  function changeHandler(event) {
    event.preventDefault()

    console.log('TARGET ===>', event.target.value);
    const newColor = colors.find(el => el.name === event.target.value);
    console.log('newColor ===>', newColor);
    console.log('ACTION_TYPE', actionType);
    dispatch({type: actionType, payload: newColor})
    // setCurrentColor(newColor);

    console.log('currentColor ===>', currentColor);

  }

  
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <div className={style.choiseForm}>

      <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
       {colorType}
      </button>
      <img src={`http://localhost:4000/${currentColor.image}`} className={style.colorChosenImage} alt='...' />

      </div>

      {/* <!-- Modal --> */}
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
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
              <button type="button" className="btn btn-primary">ОК</button> */}
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ок</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ColorChoiceForm;

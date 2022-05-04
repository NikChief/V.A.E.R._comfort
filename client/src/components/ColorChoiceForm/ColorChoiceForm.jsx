import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchInitColorsAC } from '../../redux/actionCreators/colorAC';
import Color from '../Color/Color';
import styles from './ColorChoiceForm.module.css'


function ColorChoiceForm({colorType}) {

  const dispatch = useDispatch()

  const { colors } = useSelector(state => state.colorsState);

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

  useEffect(() => {
    dispatch(fetchInitColorsAC())
  },[dispatch])
  
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" class="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
       {colorType}
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Выберите цвет</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div className='d-flex flex-wrap'>
                {hardCodeColors.map(color => <Color color={color}/>)}
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
              <button type="button" class="btn btn-primary">ОК</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorChoiceForm;

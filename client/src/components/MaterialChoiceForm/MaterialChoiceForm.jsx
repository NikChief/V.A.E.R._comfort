import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchInitMaterialsAC } from '../../redux/actionCreators/materialsAC';

function MaterialChoiceForm({ patternId }) {

  const dispatch = useDispatch()

  const { materials } = useSelector(state => state.materialsState);

  // useEffect(() => {
  //   dispatch(fetchInitMaterialsAC())
  // },[dispatch])

  useEffect(() => {
    dispatch(fetchInitMaterialsAC(patternId))
  },[dispatch])


  return (
    <div>
      <select required className='form-select' id='material'>
        <option selected value=''>Выбери материал</option>
        {materials.map(material => <option key={material.id} value={JSON.stringify(material)}>{material.type}</option>)}
      </select>
    </div>
  );
}

export default MaterialChoiceForm;

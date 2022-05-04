import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchInitMaterialsAC } from '../../redux/actionCreators/materialsAC';

function MaterialChoiceForm(props) {

  const dispatch = useDispatch()

  const { materials } = useSelector(state => state.materialsState);

  useEffect(() => {
    dispatch(fetchInitMaterialsAC())
  },[dispatch])


  return (
    <div>
      <select className='form-select' id='material_id'>
        <option defaultValue>Выбери материал</option>
        {materials.map(material => <option key={material.id} value={material.id}>{material.type}</option>)}
      </select>
    </div>
  );
}

export default MaterialChoiceForm;

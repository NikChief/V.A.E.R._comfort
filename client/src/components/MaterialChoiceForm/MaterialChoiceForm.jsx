import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchInitCurrentItemPriceAC } from '../../redux/actionCreators/itemAC';
import { fetchInitMaterialsAC } from '../../redux/actionCreators/materialsAC';

function MaterialChoiceForm({ patternId }) {

  const dispatch = useDispatch()

  const { materials } = useSelector(state => state.materialsState);

  useEffect(() => {
    dispatch(fetchInitMaterialsAC(patternId))
  },[dispatch, patternId])

  const getMaterial = useCallback((e) => {
    const materialId = JSON.parse(e.target.value).id;
    dispatch(fetchInitCurrentItemPriceAC({ patternId, materialId }));
  }, [dispatch, patternId])

  return (
    <div>
      <select onChange={getMaterial} required className='form-select' id='material'>
        <option selected disabled value=''>Выбери материал</option>
        {materials.map(material => <option key={material.id} value={JSON.stringify(material)}>{material.type + ' - ' + material.price + ' руб.'}</option>)}
      </select>
    </div>
  );
}

export default MaterialChoiceForm;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pattern from '../Pattern/Pattern';
import { fetchInitPatternsAC } from '../../redux/actionCreators/patternsAC'
import { useParams } from 'react-router-dom';

function PatternList(props) {

  const dispatch = useDispatch()
  const { patterns, categoryTypeId } = useSelector(state => state.patternState)

  useEffect(() => {
    console.log(categoryTypeId);
    dispatch(fetchInitPatternsAC(categoryTypeId))
  }, [dispatch, categoryTypeId])
// при обновлении страницы CatTypeID пропадает из стейта
// нужно положить в локал сторадж

  return (
    <div className='container d-flex flex-wrap justify-content-around'>
      {patterns.map(pattern => <Pattern key={pattern.id} pattern={pattern} />)}
    </div>
  );
}

export default PatternList;

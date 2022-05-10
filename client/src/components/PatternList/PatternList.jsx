import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pattern from '../Pattern/Pattern';
import { clearPatternsAC, fetchInitPatternsAC } from '../../redux/actionCreators/patternsAC'
import { useParams } from 'react-router-dom';
import EmptyComponent from '../EmptyComponent/EmptyComponent';

function PatternList(props) {

  const dispatch = useDispatch()
  const { patterns, categoryTypeId } = useSelector(state => state.patternState)
  const [empty, setEmpty] = useState(<></>)

  useEffect(() => {
    dispatch(fetchInitPatternsAC(categoryTypeId))
    const timeout = setTimeout(() => { if (patterns.length === 0) setEmpty(<EmptyComponent />) }, 100) 
    return () => {
      clearTimeout(timeout)
      dispatch(clearPatternsAC())
    }
  }, [dispatch, categoryTypeId])

  return (
    <>
      {
      patterns.length ?
        <div className='container d-flex flex-wrap justify-content-around'>
          {patterns.map(pattern => <Pattern key={pattern.id} pattern={pattern} />)}
        </div> :
        empty
      }
    </>
  );
}

export default PatternList;

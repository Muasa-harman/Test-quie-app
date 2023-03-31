import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'

// redu store import
import {useDispatch, useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

const Quize = () => {
  const [check,setChecked] = useState(undefined)
 const result = useSelector(state => state.result.result);
 const {queue,trace} = useSelector(state => state.questions);
 const dispatch = useDispatch()


// next button event handler
const onNext = () =>{
  // update the trace value by one using MoveNextAction
  if(trace < queue.length){
    dispatch(MoveNextQuestion());
// insert a new result in the array

    if(result.length <= trace){
      dispatch(PushAnswer(check))
    }
  }
  }
  // reset the value of the checked variable
  setChecked(undefined)

  // Prev button event handler
  const onPrev = () =>{
    if(trace > 0){
      dispatch(MovePrevQuestion());
    }
  }

  const onChecked = (check) =>{
    console.log(check)
    setChecked(check)
  }
  // finished exam after the last question
  if(result.length && result.length >= queue.length ){
    return <Navigate to={'/result'} replace={true}/>
  }

  return (
    <div className='container'>
      <h1 className='title text text-light'>Test Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked}/>
      <div className='grid'>
        {trace > 0 ? <button onClick={onPrev} className='btn prev'>Prev</button> : <div></div>}
        <button onClick={onNext} className='btn next'>Next</button>
      </div>
    </div>
  )
}

export default Quize
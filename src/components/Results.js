import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import '../styles/Result.css'
import ResultTable from './ResultTable'
import { attempts_Number,earnPoints_Number } from '../helper/helper'

const Results = () => {
    const dispatch = useDispatch()
    const {questions : {queue, answers},result: {result,userId}} = useSelector(state => state)

    useEffect(()=>{
        console.log(attempts)
    })

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result,answers)

    
    const onRestart = () =>{
      dispatch(resetAllAction());
      dispatch(resetResultAction());
    //   console.log('on Restart')
    }
  return (
    <div className='container'>
        <h1 className='title text text-light'>Test Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Daily Tuition</span>
            </div>
            <div className='flex'>
                <span>Total Quize Points:</span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Questions</span>
                <span className='bold'>05</span>
            </div>
            <div className='flex'>
                <span>Total Attempts:</span>
                <span className='bold'>03</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points:</span>
                <span className='bold'>30</span>
            </div>
            <div className='flex'>
                <span>Quize Results:</span>
                <span className='bold'>Passed</span>
            </div>
        </div>
        <div className='start'>
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className='container'>
            <ResultTable/>
        </div>
    </div>
  )
}

export default Results
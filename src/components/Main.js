import React, { useRef } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  const inputRef = useRef(null)
  return (
    <div className='container'>
      <h1 className='title text text-light'>Test Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer</li>
        <li>Each question has three points. You can choose only one option</li>
        <li>You can review and change the answer before the quize finish</li>
        <li>The results will be declared at the end of the quize</li>
      </ol>
      <form id='form'>
        <input ref={inputRef} className='userid' type='text' placeholder='Username*'/>
      </form>
      <div className='start'>
        <Link className='btn' to={'/quize'}>Start Quize</Link>
      </div>
    </div>
  )
}

export default Main
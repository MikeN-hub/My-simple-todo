import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MyContext } from '../context'

const Modal = () => {
  const [inputText, setinputText] = useState('')
  const { addTask } = useContext(MyContext)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submited')
    addTask()
  }

  return (
    <div className="Modal">
      <Link to="/">
        <BsFillArrowLeftCircleFill />
      </Link>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="enter new task"
          autoFocus
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
        />
        <button type="submit">add Task</button>
      </form>
    </div>
  )
}

export default Modal

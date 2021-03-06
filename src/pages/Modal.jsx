import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MyContext } from '../context'

const Modal = () => {
  const location = useLocation()
  const { editingTodo } = location.state
  const navigate = useNavigate()
  const { editTask } = useContext(MyContext)
  const [inputText, setinputText] = useState(editingTodo.text)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submited')
    editTask(editingTodo.id, inputText)
    navigate('/')
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
        <button type="submit">Save Task</button>
      </form>
    </div>
  )
}

export default Modal

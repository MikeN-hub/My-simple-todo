import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MyContext } from '../context'

const EditTaskPage = () => {
  const [inputText, setinputText] = useState('')
  const { editTask } = useContext(MyContext)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submited')
    editTask()
  }

  return (
    <div className="EditTaskPage">
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
        <button type="submit">save Task</button>
      </form>
    </div>
  )
}

export default EditTaskPage

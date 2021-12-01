import React, { useState, useContext } from 'react'
import { MyContext } from '../context'

const AddNewTask = () => {
  const { addTask } = useContext(MyContext)
  const [userInput, setUserInput] = useState('')

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      addTask(userInput)
      setUserInput('')
    }
  }

  const addTaskHandler = () => {
    if (userInput) {
      addTask(userInput)
      setUserInput('')
    } else {
      alert('enter task text!')
    }
  }

  return (
    <div className="AddNewTask">
      <div className="container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => enterKeyHandler(e)}
          autoFocus
        />
        <button onClick={addTaskHandler}>Add New Task</button>
      </div>
    </div>
  )
}

export default AddNewTask

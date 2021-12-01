import React, { useContext, useRef } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MyContext } from '../context'

const Task = ({ todo }) => {
  const { removeTask, toggleTask, editTask } = useContext(MyContext)
  const taskTextRef = useRef(null)

  const editHandler = (id) => {
    // console.log(taskTextRef.current)
    // taskTextRef.current.style.color = 'green'
    // console.log('todo text:', todo.text)
    editTask(id)
    
  }

  return (
    <div className="Task">
      <div className="task-container">
        <input className="toggle-task" type="checkbox" onChange={() => toggleTask(todo.id)} />
        <span ref={taskTextRef} className={todo.done ? 'text line-through' : 'text'}>{todo.text}</span>
        <FaEdit className="edit-task" cursor='pointer' color='green' onClick={() => editHandler(todo.id)}/>
        <span className="remove-task" onClick={() => removeTask(todo.id)}>&times;</span>
      </div>
    </div>
  )
}

export default Task

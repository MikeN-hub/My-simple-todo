import { useContext } from 'react'
import { MyContext } from '../context'
import Task from './Task'

const TaskList = () => {
  const { data } = useContext(MyContext)

  return (
    <div className="TaskList">
      {data.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TaskList

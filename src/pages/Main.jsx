import TopBar from '../components/TopBar'
import AddNewTask from '../components/AddNewTask'
import TaskList from '../components/TaskList'

const Main = () => {
  return (
    <div className="Main">
      <TopBar />
      <AddNewTask />
      <TaskList />
    </div>
  )
}

export default Main

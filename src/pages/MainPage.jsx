import TopBar from '../components/TopBar'
import AddNewTask from '../components/AddNewTask'
import TaskList from '../components/TaskList'

const MainPage = () => {
  return (
    <div className="MainPage">
      <TopBar />
      <AddNewTask />
      <TaskList />
    </div>
  )
}

export default MainPage

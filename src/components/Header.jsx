import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="Header">
      <div className="menu-wrapper">
        <Link to="/">Home</Link>
        <Link to="/modal">Modal</Link>
      </div>
    </div>
  )
}

export default Header

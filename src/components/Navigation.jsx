import { Link } from "react-router-dom"
import "./styles.css"

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <Link to="/">
        <div className="page-title">Remote Job Finder</div>
      </Link>
      <ul>
        <li className="nav-item">
          <Link to="/employers">Employers</Link>
        </li>
        <li className="nav-item">Sign Up</li>
      </ul>
    </nav>
  )
}

export default Navigation

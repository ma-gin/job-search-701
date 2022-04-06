import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

const Navigation = () => {
  return (
    <div>
      <Link to="/" className="nav-home">
        Home
      </Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navigation

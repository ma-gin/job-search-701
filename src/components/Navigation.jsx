import { Link } from "react-router-dom"
import "./styles.css"
import { useState } from "react"

const Navigation = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => {
    setClick(!click)
  }
  const closeMenu = () => {
    console.log("working")
    setClick(false)
  }

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false)
    else setButton(true)
  }

  window.addEventListener("resize", showButton)

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <Link to="/">
        <div className="page-title">Remote Job Finder</div>
      </Link>
      {(window.innerWidth <= 960 || !button) && (
        <NavMobile
          click={click}
          handleClick={handleClick}
          closeMenu={closeMenu}
        />
      )}
      {button && (
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/employers">Employers</Link>
          </li>
          <li className="nav-item">Sign Up</li>
        </ul>
      )}
    </nav>
  )
}

function NavMobile(props) {
  return (
    <>
      <div className="menu-icon" onClick={props.handleClick}>
        <i className={props.click ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>
      <ul
        className={
          props.click ? "nav-menu nav-mobile active" : "nav-menu nav-mobile"
        }>
        <Link to="/latest" className="nav-item" onClick={props.closeMenu}>
          <li>News</li>
        </Link>
        <Link to="/services" className="nav-item" onClick={props.closeMenu}>
          <li>Services</li>
        </Link>
        <Link to="/employers" className="nav-item" onClick={props.closeMenu}>
          <li>Employers</li>
        </Link>
        <Link to="/favorites" className="nav-item" onClick={props.closeMenu}>
          <li>Favorites</li>
        </Link>
        <li className="nav-item" onClick={props.closeMenu}>
          Sign Up
        </li>
      </ul>
    </>
  )
}

export default Navigation

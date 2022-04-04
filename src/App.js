import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import Company from "./views/Company/Company"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Home />
      <Routes>
        <Route path="home" element={Home} />
        <Route path="contact" element={Contact} />
        <Route path=":company" element={Company} />
      </Routes>
    </Router>
  )
}

export default App
